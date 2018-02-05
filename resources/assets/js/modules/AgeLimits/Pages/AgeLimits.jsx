import includes from 'lodash/includes';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Spin, Divider, Popconfirm, Row } from 'antd';
import { AgeLimitsActions } from '../Actions/AgeLimitsActions';
import { AgeLimitsServices } from '../Services/AgeLimitsServices';
import {AgeLimitEditModal} from '../Components/EditModal';

class AgeLimits extends React.Component {
    state = {
        selectedRowKeys: [],
        modalVisible: false,
        modalType: 'CREATE',
        selectedAgeLimit: {},
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            ageLimits: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    handleEdit = (selectedAgeLimit) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedAgeLimit
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
            selectedAgeLimit: {}
        });
    };
    
    render() {
        const {loading, ageLimitsData} = this.props;
        const {selectedRowKeys, selectedAgeLimit, modalType, modalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
        
        const ageLimitsColumns = [{
            title: 'Название',
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
                        <Popconfirm title="Удалить?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                            <a>Удалить</a>
                        </Popconfirm>
                    </span>
                )
            },
        }];
        
        return (
            <div className="halls-page">
                <h1>Возрастное ограничение</h1>
                <Row type="flex" style={{marginBottom: 16}}>
                    <Popconfirm title="Удалить выбранные элементы?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                        <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                    </Popconfirm>
                    <Button onClick={() => this.handleCreate()} type="primary" style={{marginLeft: 8}}>Добавить</Button>
                </Row>
                <Table
                    pagination={needPagination}
                    loading={loading}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    columns={ageLimitsColumns}
                    dataSource={ageLimitsData}
                    locale={{emptyText: 'Нет данных'}}
                    bordered />
                <AgeLimitEditModal
                    {...this.props}
                    onClose={this.handleCloseModal}
                    ageLimit={selectedAgeLimit}
                    type={modalType}
                    visible={modalVisible} />
            </div>
        );
    }
}

function mapStateToProps({ageLimits}) {
    return {
        loading: includes([0, 1], ageLimits.status),
        ageLimitsData: ageLimits.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new AgeLimitsActions(new AgeLimitsServices(), dispatch)
    }
}

const connectedAgeLimitsPage = connect(mapStateToProps, mapDispatchToProps)(AgeLimits);

export { connectedAgeLimitsPage as AgeLimits }
