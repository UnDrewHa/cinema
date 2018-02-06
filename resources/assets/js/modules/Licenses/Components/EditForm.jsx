import Promise from 'bluebird';
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Spin, message, Checkbox } from 'antd';

const FormItem = Form.Item;
import { LicensesServices } from '../Services/LicensesServices';
import { filmFormats } from '../../../base/settings';

class LicenseEditForm extends React.Component {
    state = {
        cinemasLoading: true,
        cinemas: [],
        filmsLoading: true,
        films: [],
        filmFormatsLoading: true,
        filmFormats: [],
    };
    
    services = new LicensesServices();
    
    scheme = null;
    
    componentDidMount() {
        const {actions, filmsData, match: {params}} = this.props;
        params.id && actions.loadById(params.id);
        
        Promise.all([
            this.services.loadCinemas(),
            this.services.loadFilms(),
            this.services.loadFilmFormats(),
        ]).then(response => {
            this.setState({
                cinemasLoading: false,
                cinemas: response[0].data,
                filmsLoading: false,
                films: response[1].data,
                filmFormatsLoading: false,
                filmFormats: response[2].data,
            });
        }).catch(() => message.error('Ошибка при загрузке данных.'));
    };
    
    componentWillReceiveProps({licensesData}) {
        if (this.props.match.params.id && licensesData.id && !this.props.form.getFieldValue('show_number')) {
            this.props.form.setFieldsValue(licensesData || {});
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {actions, licensesData, history, form, match: {params}} = this.props;
        const saveAction = params.id ? actions.update : actions.store;
        
        form.validateFields((err, values) => {
            if (!err) {
                saveAction({
                    ...licensesData,
                    ...values
                }).then(() => history.replace('/licenses'))
            }
        });
    };
    
    render() {
        const {licensesData, form: {getFieldDecorator}} = this.props;
        const {cinemasLoading,
            cinemas,
            filmsLoading,
            films,
            filmFormatsLoading,
            filmFormats} = this.state;
        
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
                    label="Кинотеатр"
                >
                    {getFieldDecorator('cinema_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={cinemasLoading}
                            placeholder="Выберите жанр">
                            {cinemas && cinemas.map((cinema, i) =>
                                <Select.Option key={i} value={cinema.id}>{cinema.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Фильм"
                >
                    {getFieldDecorator('film_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={filmsLoading}
                            placeholder="Выберите режиссера">
                            {films && films.map((film, i) =>
                                <Select.Option key={i} value={film.id}>{film.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Формат фильма"
                >
                    {getFieldDecorator('film_format_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select
                            {...selectSearchOptions}
                            disabled={filmFormatsLoading}
                            placeholder="Выберите кинотеатр">
                            {filmFormats && filmFormats.map((filmFormat, i) =>
                                <Select.Option key={i} value={filmFormat.id}>{filmFormat.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Количество показов"
                >
                    {getFieldDecorator('show_number', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Link to='/licenses'><Button>Назад</Button></Link>
                    <Button style={{marginLeft: 8}} loading={this.props.loading} type="primary" htmlType="submit">Сохранить</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedEditForm = Form.create()(LicenseEditForm);
export { WrappedEditForm as LicenseEditForm };
