import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { modal as modalTexts } from '../../../base/settings';

export class GenreEditModal extends React.Component {
    state = {
        confirmLoading: false,
        genreName: ''
    };
    
    componentWillReceiveProps({genre}) {
        this.setState({
            genreName: genre.name || ''
        });
    }
    
    handleOk = () => {
        const {actions, genre} = this.props;
        const {genreName} = this.state;
        const saveAction = genre.id ? actions.update : actions.store;
    
        saveAction({...genre, name: genreName})
            .then(this.props.onClose)
            .catch(this.props.onClose);
    };
    
    handleCancel = () => {
        this.props.onClose();
    };
    
    handleChange = (e) => {
        this.setState({
            genreName: e.target.value
        });
    };
    
    render() {
        const {genre, loading, type, visible} = this.props;
        const {genreName} = this.state;
        const {title, cancelText, okText} = modalTexts.genres[type];
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
                <Form.Item {...formItemLayout} label="Название жанра">
                    <Input type="text" onChange={this.handleChange} value={genreName} required />
                </Form.Item>
            </Modal>
        );
    }
}
