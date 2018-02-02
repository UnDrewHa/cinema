import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import {CinemaEditModal} from '../Components/EditModal';

export class Cinemas extends React.Component {
    state = {
        modalType: 'CREATE',
        modalVisible: false,
        selectedCinema: null,
    };
    
    handleEdit = (selectedCinema) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedCinema
        });
    };
    
    handleAdd = () => {
        this.setState({
            modalType: 'CREATE',
            modalVisible: true,
            
        });
    };
    
    handleCloseModal = () => {
        this.setState({
            modalVisible: false
        });
    };
    
    render() {
        return (
            <div className="cinemas-page">
                <h1>Кинотеатры</h1>
                <Row gutter={24} type="flex">
                    <Col span={6} className="cinema-item">
                        <Card
                            title="название кинотеатра"
                            hoverable
                            actions={[<Icon type="edit" onClick={() => this.handleEdit({name: {value:'asdf'}})} />, <Icon type="delete" />]}>
                            <p>Описание кинотеатра</p>
                        </Card>
                    </Col>
                    <Col span={6} className="cinema-item cinema-add-item">
                        <Card hoverable onClick={this.handleAdd}>
                            <Icon type="plus" />
                        </Card>
                    </Col>
                </Row>
                <CinemaEditModal
                    onClose={this.handleCloseModal}
                    cinema={this.state.selectedCinema}
                    type={this.state.modalType}
                    visible={this.state.modalVisible}/>
            </div>
        );
    }
}