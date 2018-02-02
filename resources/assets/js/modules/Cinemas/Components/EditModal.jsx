import isNull from 'lodash/isNull';
import React from 'react';
import { Modal, Button } from 'antd';
import { modal as modalTexts } from '../../../base/settings';
import { CinemasEditForm } from './EditForm';

export class CinemaEditModal extends React.Component {
    state = {
        confirmLoading: false,
    };
    
    editForm = null;
    
    componentDidMount() {
      const {cinema} = this.props;
      if (cinema) {
          this.editForm.setFields(cinema);
          console.log(cinema);
      }
    };
    
    handleOk = (values) => {
        this.editForm.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
        
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                confirmLoading: false,
            });
        }, 2000);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    render() {
        const {confirmLoading, ModalText} = this.state;
        const {type, visible} = this.props;
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
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
            >
                <CinemasEditForm ref={form => this.editForm = form} onFormSubmit={this.handleOk}/>
            </Modal>
        );
    }
}

// name
// address
// phone
// description
