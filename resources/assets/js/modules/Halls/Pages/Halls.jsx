import includes from 'lodash/includes';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Table, Button, Spin, Divider, Popconfirm, Row  } from 'antd';
import { HallsActions } from '../Actions/HallsActions';
import { HallsServices } from '../Services/HallsServices';

function getCinemasFilterSettings(data) {
    if (!data) return [];
    return uniqBy(map(data, item => {
        return {
            text: item.cinema.name,
            value: item.cinema.id
        };
    }), 'value');
}

function getFilmFormatsFilterSettings(data) {
    if (!data) return [];
    return uniqBy(map(data, item => {
        return {
            text: item.film_format.name,
            value: item.film_format.id
        };
    }), 'value');
}

class Halls extends React.Component {
    state = {
        selectedRowKeys: [],
        filteredInfo: {}
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            filteredInfo: filters
        });
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            halls: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    render() {
        const {loading, hallsData} = this.props;
        const {filteredInfo, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
    
        const hallsColumns = [{
            title: 'Название зала',
            dataIndex: 'name',
        }, {
            title: 'Количество мест',
            dataIndex: 'place_count',
        }, {
            title: 'Кинотеатр',
            dataIndex: 'cinema.name',
            filters: getCinemasFilterSettings(hallsData),
            filteredValue: filteredInfo['cinema.name'] || null,
            onFilter: (id, hall) => hall.cinema.id === parseInt(id, 10)
        }, {
            title: 'Формат',
            dataIndex: 'film_format.name',
            filters: getFilmFormatsFilterSettings(hallsData),
            filteredValue: filteredInfo['film_format.name'] || null,
            onFilter: (id, hall) => hall.film_format.id === parseInt(id, 10)
        },{
            title: 'Действия',
            key: 'action',
            width: 360,
            render: (item) => {
                return (
                    <span>
                <Link to={`/hall/edit/${item.id}`}>Изменить</Link>
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
                    <h1>Залы</h1>
                    <Row type="flex" style={{marginBottom: 16}}>
                        <Popconfirm title="Удалить выбранные залы?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                            <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                        </Popconfirm>
                        <Link to="/hall/create">
                            <Button type="primary" style={{marginLeft: 8}}>Добавить</Button>
                        </Link>
                    </Row>
                    <Table
                        onChange={this.handleChange}
                        pagination={needPagination}
                        loading={loading}
                        rowSelection={rowSelection}
                        rowKey={record => record.id}
                        columns={hallsColumns}
                        dataSource={hallsData}
                        locale={{filterConfirm: 'Ок', filterReset: 'Сброс', emptyText: 'Нет данных'}}
                        bordered />
                </div>
        );
    }
}

function mapStateToProps({halls}) {
    return {
        loading: includes([0, 1], halls.list.status),
        hallsData: halls.list.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new HallsActions(new HallsServices(), dispatch)
    }
}

const connectedHallsPage = connect(mapStateToProps, mapDispatchToProps)(Halls);

export { connectedHallsPage as Halls }
