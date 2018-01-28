import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Icon, Input, Button } from 'antd';

export class ResetForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };
    
    render() {
        return (
            <Card title="Восстановить доступ" className="auth-form">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="email"
                            placeholder="Эл. почта"
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Восстановить
                        </Button>
                        Или <Link to="/auth">Войти</Link>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}
