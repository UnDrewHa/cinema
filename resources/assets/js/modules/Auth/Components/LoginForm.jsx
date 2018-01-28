import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Icon, Input, Button } from 'antd';

export class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };
    
    render() {
        return (
            <Card title="Войти" className="auth-form">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="email"
                            placeholder="Эл. почта"
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="password"
                            placeholder="Пароль"
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Link to="/auth/reset">
                            Восстановить доступ
                        </Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Войти
                        </Button>
                        <Link to="/auth/register">
                            Зарегистрироваться
                        </Link>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}
