import isNull from 'lodash/isNull';
import mapValues from 'lodash/mapValues';
import React from 'react';
import { Modal, Button, message } from 'antd';
import { modal as modalTexts } from '../../../base/settings';
import { CinemasEditForm } from './EditForm';

export class CinemaEditModal extends React.Component {
    state = {
        confirmLoading: false,
    };
    
    editForm = null;
    
    handleOk = (values) => {
        const {actions, cinema} = this.props;
        const saveAction = cinema.id ? actions.update : actions.store;

        this.editForm.validateFields((err, values) => {
            if (!err) {
                saveAction({...cinema,...values})
                    .then(this.props.onClose)
                    .catch(this.props.onClose);
    
                this.editForm.resetFields();
            }
        });
    };
    
    handleCancel = () => {
        this.props.onClose();
        this.editForm.resetFields();
    };
    
    render() {
        const {cinema, loading, type, visible} = this.props;
        const {title, cancelText, okText} = modalTexts.cinemas[type];
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
                <CinemasEditForm ref={form => this.editForm = form} cinema={cinema} onFormSubmit={this.handleOk}/>
            </Modal>
        );
    }
}
