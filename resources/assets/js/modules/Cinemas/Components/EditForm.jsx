import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;

class EditForm extends React.Component {
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
