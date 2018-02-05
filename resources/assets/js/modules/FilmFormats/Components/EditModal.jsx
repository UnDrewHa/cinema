import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { modal as modalTexts } from '../../../base/settings';

export class FilmFormatEditModal extends React.Component {
    state = {
        confirmLoading: false,
        filmFormatName: ''
    };
    
    componentWillReceiveProps({filmFormat}) {
        this.setState({
            filmFormatName: filmFormat.name || ''
        });
    }
    
    handleOk = () => {
        const {actions, filmFormat} = this.props;
        const {filmFormatName} = this.state;
        const saveAction = filmFormat.id ? actions.update : actions.store;
    
        saveAction({...filmFormat, name: filmFormatName})
            .then(this.props.onClose)
            .catch(this.props.onClose);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    handleChange = (e) => {
        this.setState({
            filmFormatName: e.target.value
        });
    };
    
    render() {
        const {filmFormat, loading, type, visible} = this.props;
        const {filmFormatName} = this.state;
        const {title, cancelText, okText} = modalTexts.filmFormats[type];
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
                <Form.Item {...formItemLayout} label="Формат фильмов">
                    <Input type="text" onChange={this.handleChange} value={filmFormatName} required />
                </Form.Item>
            </Modal>
        );
    }
}
