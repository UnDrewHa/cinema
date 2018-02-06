import includes from 'lodash/includes';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Table, Button, Spin, Divider, Popconfirm, Row  } from 'antd';
import { LicensesActions } from '../Actions/LicensesActions';
import { LicensesServices } from '../Services/LicensesServices';

class Licenses extends React.Component {
    state = {
        selectedRowKeys: []
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            licenses: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    render() {
        const {loading, licensesData} = this.props;
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
    
        const licensesColumns = [{
            title: 'Кинотеатр',
            dataIndex: 'cinema.name',
        }, {
            title: 'Фильм',
            dataIndex: 'film.name',
        }, {
            title: 'Формат фильма',
            dataIndex: 'film_format.name',
        }, {
            title: 'Количество показов',
            dataIndex: 'show_number',
        }, {
            title: 'Действия',
            key: 'action',
            width: 200,
            render: (item) => {
                return (
                    <span>
                <Link to={`/license/edit/${item.id}`}>Изменить</Link>
                <Divider type="vertical" />
                <Popconfirm title="Удалить лицензию?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                    <a>Удалить</a>
                </Popconfirm>
            </span>
                )
            },
        }];
        
        return (
                <div className="licenses-page">
                    <h1>Лицензии на показы</h1>
                    <Row type="flex" style={{marginBottom: 16}}>
                        <Popconfirm title="Удалить выбранные лицензии?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                            <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                        </Popconfirm>
                        <Link to="/license/create">
                            <Button type="primary" style={{marginLeft: 8}}>Добавить</Button>
                        </Link>
                    </Row>
                    <Table
                        pagination={needPagination}
                        loading={loading}
                        rowSelection={rowSelection}
                        rowKey={record => record.id}
                        columns={licensesColumns}
                        dataSource={licensesData}
                        locale={{filterConfirm: 'Ок', filterReset: 'Сброс', emptyText: 'Нет данных'}}
                        bordered />
                </div>
        );
    }
}

function mapStateToProps({licenses}) {
    return {
        loading: includes([0, 1], licenses.list.status),
        licensesData: licenses.list.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new LicensesActions(new LicensesServices(), dispatch)
    }
}

const connectedLicensesPage = connect(mapStateToProps, mapDispatchToProps)(Licenses);

export { connectedLicensesPage as Licenses }
