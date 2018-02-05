import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { modal as modalTexts } from '../../../base/settings';

export class CountryEditModal extends React.Component {
    state = {
        confirmLoading: false,
        countryName: ''
    };
    
    componentWillReceiveProps({country}) {
        this.setState({
            countryName: country.name || ''
        });
    }
    
    handleOk = () => {
        const {actions, country} = this.props;
        const {countryName} = this.state;
        const saveAction = country.id ? actions.update : actions.store;
    
        saveAction({...country, name: countryName})
            .then(this.props.onClose)
            .catch(this.props.onClose);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    handleChange = (e) => {
        this.setState({
            countryName: e.target.value
        });
    };
    
    render() {
        const {country, loading, type, visible} = this.props;
        const {countryName} = this.state;
        const {title, cancelText, okText} = modalTexts.countries[type];
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
            <Modal
                title={title}
                cancelText={cancelText}
                okText={okText}
                visible={visible}
                onOk={this.handleOk}
                confirmLoading={loading}
                onCancel={this.handleCancel}
            >
                <Form.Item {...formItemLayout} label="Страна">
                    <Input type="text" onChange={this.handleChange} value={countryName} required />
                </Form.Item>
            </Modal>
        );
    }
}
