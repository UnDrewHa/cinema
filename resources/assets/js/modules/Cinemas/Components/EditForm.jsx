import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import mapValues from 'lodash/mapValues';
const FormItem = Form.Item;

function transformObjectToFields(obj) {
    return mapValues(obj, (value) => ({
        errors: [],
        value
    }));
}

class EditForm extends React.Component {
    
    componentDidMount() {
        const {cinema, form} = this.props;
        cinema && form.setFieldsValue(cinema);
    };
    
    componentWillReceiveProps({cinema}) {
        if (this.props.cinema.id !== cinema.id) {
            this.props.form.setFieldsValue(cinema);
        }
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        
        return (
            <Form>
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
                    label="Телефон"
                >
                    {getFieldDecorator('phone', {
                        rules: [
                            { required: true, message: 'Обязательное поле.' },
                            { pattern: new RegExp(/\d{11}/), message: 'Формат: 89038234404.' }
                            ],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Адрес"
                >
                    {getFieldDecorator('address', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Описание"
                >
                    {getFieldDecorator('description', {
                        rules: [],
                    })(
                        <Input />
                    )}
                </FormItem>
            </Form>
        );
    }
}

const WrappedEditForm = Form.create()(EditForm);
export {WrappedEditForm as CinemasEditForm};
