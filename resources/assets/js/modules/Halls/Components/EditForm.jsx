import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input, Select, Button, Spin, message  } from 'antd';
const FormItem = Form.Item;
import { HallsServices } from '../Services/HallsServices';

class EditForm extends React.Component {
    state = {
        cinemasLoading: true,
        filmFormatLoading: true,
        cinemas: {},
        filmFormats: {}
    };

    services = new HallsServices();
    
    componentDidMount() {
        const {actions, hallsData, match: {params}} = this.props;
        params.id && actions.loadById(params.id);
        
        this.services.loadCinemas()
            .then(cinemas => {
                this.setState({
                    cinemasLoading: false,
                    cinemas
                });
            })
            .catch(() => message.error('Ошибка при загрузке данных.'));
    
        this.services.loadFilmFormat()
            .then(filmFormats => {
                this.setState({
                    filmFormatLoading: false,
                    filmFormats
                });
            })
            .catch(() => message.error('Ошибка при загрузке данных.'));
        
    };
    
    componentWillReceiveProps({hallsData}) {
        if (this.props.hallsData.id !== hallsData.id) {
            this.props.form.setFieldsValue(hallsData);
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {actions, hallsData, history, form} = this.props;
        const saveAction = hallsData.id ? actions.update : actions.store;
    
        form.validateFields((err, values) => {
            if (!err) {
                saveAction({...hallsData,...values})
                    .then(() => history.replace('/halls'))
                
            }
        });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const {cinemas, cinemasLoading, filmFormats, filmFormatLoading} = this.state;
        
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
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
                    label="Количество мест"
                >
                    {getFieldDecorator('place_count', {
                        rules: [
                            { required: true, message: 'Обязательное поле.' },
                            { pattern: new RegExp(/\d+/) }
                        ],
                    })(
                        <Input />
                    )}
                </FormItem>
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
                        <Select disabled={cinemasLoading} placeholder="Выберите кинотеатр">
                            {cinemas.data && cinemas.data.map((cinema,i) =>
                                <Select.Option key={i} value={cinema.id}>{cinema.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Формат"
                >
                    {getFieldDecorator('film_format_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select disabled={filmFormatLoading} placeholder="Выберите формат">
                            {filmFormats.data && filmFormats.data.map((format,i) =>
                                <Select.Option key={i} value={format.id}>{format.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    <Link to='/halls'><Button>Назад</Button></Link>
                    <Button style={{marginLeft: 8}} loading={this.props.loading} type="primary" htmlType="submit">Сохранить</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedEditForm = Form.create()(EditForm);
export {WrappedEditForm as HallEditForm};
