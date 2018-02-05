import includes from 'lodash/includes';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button, Spin, Divider, Popconfirm, Row } from 'antd';
import { ActorsActions } from '../Actions/ActorsActions';
import { ActorsServices } from '../Services/ActorsServices';
import {ActorEditModal} from '../Components/EditModal';

class Actors extends React.Component {
    state = {
        selectedRowKeys: [],
        modalVisible: false,
        modalType: 'CREATE',
        selectedActor: {},
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            actors: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    handleEdit = (selectedActor) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedActor
        });
    };
    
    handleCreate = () => {
        this.setState({
            modalType: 'CREATE',
            modalVisible: true,
        });
    };
    
    handleCloseModal = () => {
        this.setState({
            modalVisible: false,
            selectedActor: {}
        });
    };
    
    render() {
        const {loading, actorsData} = this.props;
        const {selectedRowKeys, selectedActor, modalType, modalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
        
        const hallsColumns = [{
            title: 'ФИО актера',
            dataIndex: 'name',
        }, {
            title: 'Действия',
            key: 'action',
            width: 360,
            render: (item) => {
                return (
                    <span>
                        <a onClick={() => this.handleEdit(item)}>Изменить</a>
                        <Divider type="vertical" />
                        <Popconfirm title="Удалить зал?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                            <a>Удалить</a>
                        </Popconfirm>
                    </span>
                )
            },
        }];
        
        return (
            <div className="halls-page">
                <h1>Актеры</h1>
                <Row type="flex" style={{marginBottom: 16}}>
                    <Popconfirm title="Удалить выбранных актеров?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                        <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                    </Popconfirm>
                        <Button onClick={() => this.handleCreate()} type="primary" style={{marginLeft: 8}}>Добавить</Button>
                </Row>
                <Table
                    pagination={needPagination}
                    loading={loading}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    columns={hallsColumns}
                    dataSource={actorsData}
                    locale={{emptyText: 'Нет данных'}}
                    bordered />
                <ActorEditModal
                    {...this.props}
                    onClose={this.handleCloseModal}
                    actor={selectedActor}
                    type={modalType}
                    visible={modalVisible} />
            </div>
        );
    }
}

function mapStateToProps({actors}) {
    return {
        loading: includes([0, 1], actors.status),
        actorsData: actors.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new ActorsActions(new ActorsServices(), dispatch)
    }
}

const connectedActorsPage = connect(mapStateToProps, mapDispatchToProps)(Actors);

export { connectedActorsPage as Actors }
