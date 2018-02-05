import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { modal as modalTexts } from '../../../base/settings';

export class DirectorEditModal extends React.Component {
    state = {
        confirmLoading: false,
        directorName: ''
    };
    
    componentWillReceiveProps({director}) {
        this.setState({
            directorName: director.name || ''
        });
    }
    
    handleOk = () => {
        const {actions, director} = this.props;
        const {directorName} = this.state;
        const saveAction = director.id ? actions.update : actions.store;
    
        saveAction({...director, name: directorName})
            .then(this.props.onClose)
            .catch(this.props.onClose);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    handleChange = (e) => {
        this.setState({
            directorName: e.target.value
        });
    };
    
    render() {
        const {director, loading, type, visible} = this.props;
        const {directorName} = this.state;
        const {title, cancelText, okText} = modalTexts.directors[type];
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
                <Form.Item {...formItemLayout} label="ФИО режиссера">
                    <Input type="text" onChange={this.handleChange} value={directorName} required />
                </Form.Item>
            </Modal>
        );
    }
}
