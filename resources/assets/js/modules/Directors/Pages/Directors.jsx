import includes from 'lodash/includes';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Spin, Divider, Popconfirm, Row } from 'antd';
import { DirectorsActions } from '../Actions/DirectorsActions';
import { DirectorsServices } from '../Services/DirectorsServices';
import {DirectorEditModal} from '../Components/EditModal';

class Directors extends React.Component {
    state = {
        selectedRowKeys: [],
        modalVisible: false,
        modalType: 'CREATE',
        selectedDirector: {},
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            directors: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    handleEdit = (selectedDirector) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedDirector
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
            selectedDirector: {}
        });
    };
    
    render() {
        const {loading, directorsData} = this.props;
        const {selectedRowKeys, selectedDirector, modalType, modalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
        
        const directorsColumns = [{
            title: 'ФИО режиссера',
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
                        <Popconfirm title="Удалить режиссера?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                            <a>Удалить</a>
                        </Popconfirm>
                    </span>
                )
            },
        }];
        
        return (
            <div className="halls-page">
                <h1>Режиссеры</h1>
                <Row type="flex" style={{marginBottom: 16}}>
                    <Popconfirm title="Удалить выбранных режиссеров?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                        <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                    </Popconfirm>
                    <Button onClick={() => this.handleCreate()} type="primary" style={{marginLeft: 8}}>Добавить</Button>
                </Row>
                <Table
                    pagination={needPagination}
                    loading={loading}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    columns={directorsColumns}
                    dataSource={directorsData}
                    locale={{emptyText: 'Нет данных'}}
                    bordered />
                <DirectorEditModal
                    {...this.props}
                    onClose={this.handleCloseModal}
                    director={selectedDirector}
                    type={modalType}
                    visible={modalVisible} />
            </div>
        );
    }
}

function mapStateToProps({directors}) {
    return {
        loading: includes([0, 1], directors.status),
        directorsData: directors.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new DirectorsActions(new DirectorsServices(), dispatch)
    }
}

const connectedDirectorsPage = connect(mapStateToProps, mapDispatchToProps)(Directors);

export { connectedDirectorsPage as Directors }
