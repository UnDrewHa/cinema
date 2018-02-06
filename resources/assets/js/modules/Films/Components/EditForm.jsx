import Promise from 'bluebird';
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Spin, message, Checkbox } from 'antd';

const FormItem = Form.Item;
import { FilmsServices } from '../Services/FilmsServices';

class FilmEditForm extends React.Component {
    state = {
        directorsLoading: true,
        directors: [],
        actorsLoading: true,
        actors: [],
        genresLoading: true,
        genres: [],
        ageLimitsLoading: true,
        ageLimits: [],
        countriesLoading: true,
        countries: [],
    };
    
    services = new FilmsServices();
    
    scheme = null;
    
    componentDidMount() {
        const {actions, filmsData, match: {params}} = this.props;
        params.id && actions.loadById(params.id);
        
        Promise.all([
            this.services.loadDirectors(),
            this.services.loadActors(),
            this.services.loadGenres(),
            this.services.loadAgeLimits(),
            this.services.loadCountries(),
        ]).then(response => {
            this.setState({
                directorsLoading: false,
                directors: response[0].data,
                actorsLoading: false,
                actors: response[1].data,
                genresLoading: false,
                genres: response[2].data,
                ageLimitsLoading: false,
                ageLimits: response[3].data,
                countriesLoading: false,
                countries: response[4].data,
            });
        }).catch(() => message.error('Ошибка при загрузке данных.'));
    };
    
    componentWillReceiveProps({filmsData}) {
        if (this.props.match.params.id && (this.props.filmsData.id !== filmsData.id)) {
            this.props.form.setFieldsValue({
                ...filmsData,
                actors: filmsData.actors ? filmsData.actors.map(item => item.id) : []
            });
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {actions, filmsData, history, form, match: {params}} = this.props;
        const saveAction = params.id ? actions.update : actions.store;
        
        form.validateFields((err, values) => {
            if (!err) {
                saveAction({
                    ...filmsData,
                    ...values
                }).then(() => history.replace('/films'))
            }
        });
    };
    
    render() {
        const {filmsData, form: {getFieldDecorator}} = this.props;
        const {directorsLoading,
            directors,
            actorsLoading,
            actors,
            genresLoading,
            genres,
            ageLimitsLoading,
            ageLimits,
            countriesLoading,
            countries} = this.state;
        
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };
        
        const selectSearchOptions = {
            optionFilterProp: "children",
            filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
            defaultActiveFirstOption: false,
            notFoundContent: 'Нет данных',
            showSearch: true,
            initialValue: undefined
        };
    
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Название"
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Режиссер"
                >
                    {getFieldDecorator('director_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={directorsLoading}
                            placeholder="Выберите режиссера">
                            {directors && directors.map((director, i) =>
                                <Select.Option key={i} value={director.id}>{director.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Актеры"
                >
                    {getFieldDecorator('actors', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            mode="multiple"
                            initialValue={[]}
                            notFoundContent='Нет данных'
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            disabled={actorsLoading}
                            placeholder="Выберите актеров">
                            {actors && actors.map((actor, i) =>
                                <Select.Option key={i} value={actor.id}>{actor.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Жанр"
                >
                    {getFieldDecorator('genre_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={genresLoading}
                            placeholder="Выберите жанр">
                            {genres && genres.map((genre, i) =>
                                <Select.Option key={i} value={genre.id}>{genre.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Страна"
                >
                    {getFieldDecorator('country_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={countriesLoading}
                            placeholder="Выберите кинотеатр">
                            {countries && countries.map((country, i) =>
                                <Select.Option key={i} value={country.id}>{country.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Длительность"
                >
                    {getFieldDecorator('duration', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Возраст"
                >
                    {getFieldDecorator('age_limit_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={ageLimitsLoading}
                            placeholder="Выберите кинотеатр">
                            {ageLimits && ageLimits.map((ageLimit, i) =>
                                <Select.Option key={i} value={ageLimit.id}>{ageLimit.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Описание"
                >
                    {getFieldDecorator('description', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input.TextArea rows={4} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Трейлер"
                >
                    {getFieldDecorator('trailer', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Обложка"
                >
                    {getFieldDecorator('cover', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Link to='/films'><Button>Назад</Button></Link>
                    <Button style={{marginLeft: 8}} loading={this.props.loading} type="primary" htmlType="submit">Сохранить</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedEditForm = Form.create()(FilmEditForm);
export { WrappedEditForm as FilmEditForm };
