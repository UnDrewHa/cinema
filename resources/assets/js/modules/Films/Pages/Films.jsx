import includes from 'lodash/includes';
import map from 'lodash/map';
import uniqBy from 'lodash/uniqBy';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Table, Button, Spin, Divider, Popconfirm, Row  } from 'antd';
import { FilmsActions } from '../Actions/FilmsActions';
import { FilmsServices } from '../Services/FilmsServices';

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

class Films extends React.Component {
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
            films: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    render() {
        const {loading, filmsData} = this.props;
        const {filteredInfo, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
    
        const filmsColumns = [{
            title: 'Название',
            dataIndex: 'name',
        }, {
            title: 'Режиссер',
            dataIndex: 'director.name',
        }, {
            title: 'Жанр',
            dataIndex: 'genre.name',
        }, {
            title: 'Страна',
            dataIndex: 'country.name',
        }, {
            title: 'Длительность',
            dataIndex: 'duration',
        }, {
            title: 'Возраст',
            dataIndex: 'age_limit.name',
        }, {
            title: 'Описание',
            dataIndex: 'description',
        }, {
            title: 'Действия',
            key: 'action',
            width: 200,
            render: (item) => {
                return (
                    <span>
                <Link to={`/film/edit/${item.id}`}>Изменить</Link>
                <Divider type="vertical" />
                <Popconfirm title="Удалить фильм?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                    <a>Удалить</a>
                </Popconfirm>
            </span>
                )
            },
        }];
        
        return (
                <div className="films-page">
                    <h1>Фильмы</h1>
                    <Row type="flex" style={{marginBottom: 16}}>
                        <Popconfirm title="Удалить выбранные фильмы?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                            <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                        </Popconfirm>
                        <Link to="/film/create">
                            <Button type="primary" style={{marginLeft: 8}}>Добавить</Button>
                        </Link>
                    </Row>
                    <Table
                        onChange={this.handleChange}
                        pagination={needPagination}
                        loading={loading}
                        rowSelection={rowSelection}
                        rowKey={record => record.id}
                        columns={filmsColumns}
                        dataSource={filmsData}
                        locale={{filterConfirm: 'Ок', filterReset: 'Сброс', emptyText: 'Нет данных'}}
                        bordered />
                </div>
        );
    }
}

function mapStateToProps({films}) {
    return {
        loading: includes([0, 1], films.list.status),
        filmsData: films.list.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new FilmsActions(new FilmsServices(), dispatch)
    }
}

const connectedFilmsPage = connect(mapStateToProps, mapDispatchToProps)(Films);

export { connectedFilmsPage as Films }
