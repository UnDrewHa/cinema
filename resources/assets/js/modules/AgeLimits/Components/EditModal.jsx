import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { modal as modalTexts } from '../../../base/settings';

export class AgeLimitEditModal extends React.Component {
    state = {
        confirmLoading: false,
        ageLimitName: ''
    };
    
    componentWillReceiveProps({ageLimit}) {
        this.setState({
            ageLimitName: ageLimit.name || ''
        });
    }
    
    handleOk = () => {
        const {actions, ageLimit} = this.props;
        const {ageLimitName} = this.state;
        const saveAction = ageLimit.id ? actions.update : actions.store;
    
        saveAction({...ageLimit, name: ageLimitName})
            .then(this.props.onClose)
            .catch(this.props.onClose);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    handleChange = (e) => {
        this.setState({
            ageLimitName: e.target.value
        });
    };
    
    render() {
        const {ageLimit, loading, type, visible} = this.props;
        const {ageLimitName} = this.state;
        const {title, cancelText, okText} = modalTexts.ageLimits[type];
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
                <Form.Item {...formItemLayout} label="Название">
                    <Input type="text" onChange={this.handleChange} value={ageLimitName} required />
                </Form.Item>
            </Modal>
        );
    }
}
