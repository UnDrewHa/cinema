import { includes } from 'lodash';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Card, Form, Icon, Input, Button, notification } from 'antd';
import { AuthActions } from '../Actions/AuthActions';
import { AuthServices } from '../Services/AuthServices';

class RegisterForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        c_password: ''
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, c_password} = this.state;
        const { actions, history } = this.props;
        const token = document.head.querySelector('meta[name="csrf-token"]').content;
        
        actions.register({
            name,
            email,
            password,
            c_password
        }).then(() => {
            notification.open({
                description: "Успешно зарегистрировались",
                duration: 4,
                placement: "bottomRight",
                message: "Регистрация",
                type: 'success'
            });
            history.push('/auth');
        })
    };
    
    handleFieldChange = (e) => {
        this.setState({
            [e.currentTarget.dataset.name]: e.currentTarget.value
        });
    };
    
    render() {
        const {name, email, password, c_password} = this.state;
        const { isLoading } = this.props;
        return (
            <Card title="Зарегистрироваться" className="auth-form">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            onChange={this.handleFieldChange}
                            data-name="name"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="text"
                            placeholder="Имя пользователя"
                            value={name}
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            onChange={this.handleFieldChange}
                            data-name="email"
                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="email"
                            placeholder="Эл. почта"
                            value={email}
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            onChange={this.handleFieldChange}
                            data-name="password"
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            onChange={this.handleFieldChange}
                            data-name="c_password"
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                            type="password"
                            placeholder="Повторите пароль"
                            value={c_password}
                            required />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                            Зарегистрироваться
                        </Button>
                        Или <Link to="/auth">Войти</Link>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

function mapStateToProps({userInfo}) {
    return {
        isLoading: includes([0, 1], userInfo.status),
        userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new AuthActions(new AuthServices(), dispatch)
    }
}

const connectedRegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export { connectedRegisterForm as RegisterForm }
