import isNull from 'lodash/isNull';
import mapValues from 'lodash/mapValues';
import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { modal as modalTexts } from '../../../base/settings';

export class ActorEditModal extends React.Component {
    state = {
        confirmLoading: false,
        actorName: ''
    };
    
    componentWillReceiveProps({actor}) {
        this.setState({
            actorName: actor.name || ''
        });
    }
    
    handleOk = () => {
        const {actions, actor} = this.props;
        const {actorName} = this.state;
        const saveAction = actor.id ? actions.update : actions.store;
    
        saveAction({...actor, name: actorName})
            .then(this.props.onClose)
            .catch(this.props.onClose);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    handleChange = (e) => {
        this.setState({
            actorName: e.target.value
        });
    };
    
    render() {
        const {actor, loading, type, visible} = this.props;
        const {actorName} = this.state;
        const {title, cancelText, okText} = modalTexts.actors[type];
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
                <Form.Item {...formItemLayout} label="ФИО актера">
                    <Input type="text" onChange={this.handleChange} value={actorName} required />
                </Form.Item>
            </Modal>
        );
    }
}
