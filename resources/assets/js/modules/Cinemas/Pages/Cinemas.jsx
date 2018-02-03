import includes from 'lodash/includes';
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon, Spin, Button, message } from 'antd';
import { CinemaEditModal } from '../Components/EditModal';
import { CinemaActions } from '../Actions/CinemaActions';
import { CinemaServices } from '../Services/CinemaServices';

class Cinemas extends React.Component {
    state = {
        modalType: 'CREATE',
        modalVisible: false,
        selectedCinema: {}
    };
    
    componentWillMount() {
        this.props.actions.load();
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
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
            modalVisible: false,
            selectedCinema: {}
        });
    };
    
    render() {
        const {cinemasData, loading} = this.props;
        const {selectedCinema, modalType, modalVisible} = this.state;
        return (
            <Spin spinning={loading}>
                <div className="cinemas-page">
                    <h1>Кинотеатры</h1>
                    
                    <Row gutter={24} type="flex">
                        {
                            cinemasData && cinemasData.map((cinema, i) => (
                                    <Col span={8} className="cinema-item" key={i}>
                                        <Card
                                            title={cinema.name}
                                            actions={[
                                                <Icon type="edit" onClick={() => this.handleEdit(cinema)} />,
                                                <Icon type="delete" onClick={() => this.handleDelete(cinema)} />]}>
                                            <p>
                                                <b>Телефон: </b>
                                                {cinema.phone}</p>
                                            <p>
                                                <b>Адрес: </b>
                                                {cinema.address}</p>
                                            <p>{cinema.description}</p>
                                        </Card>
                                    </Col>
                                )
                            )
                        }
                        <Col span={8} className="cinema-item cinema-add-item">
                            <Button type="dashed" onClick={this.handleAdd}>
                                <Icon type="plus" />
                            </Button>
                        </Col>
                    </Row>
                    
                    <CinemaEditModal
                        {...this.props}
                        onClose={this.handleCloseModal}
                        cinema={selectedCinema}
                        type={modalType}
                        visible={modalVisible} />
                </div>
            </Spin>
        );
    }
}

function mapStateToProps({cinemas}) {
    return {
        loading: includes([0, 1], cinemas.status),
        cinemasData: cinemas.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new CinemaActions(new CinemaServices(), dispatch)
    }
}

const connectedCinemasPage = connect(mapStateToProps, mapDispatchToProps)(Cinemas);

export { connectedCinemasPage as Cinemas }
