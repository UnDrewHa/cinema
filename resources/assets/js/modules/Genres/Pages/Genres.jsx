import includes from 'lodash/includes';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Spin, Divider, Popconfirm, Row } from 'antd';
import { GenresActions } from '../Actions/GenresActions';
import { GenresServices } from '../Services/GenresServices';
import {GenreEditModal} from '../Components/EditModal';

class Genres extends React.Component {
    state = {
        selectedRowKeys: [],
        modalVisible: false,
        modalType: 'CREATE',
        selectedGenre: {},
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            genres: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    handleEdit = (selectedGenre) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedGenre
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
            selectedGenre: {}
        });
    };
    
    render() {
        const {loading, genresData} = this.props;
        const {selectedRowKeys, selectedGenre, modalType, modalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
        
        const genresColumns = [{
            title: 'Название жанра',
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
                        <Popconfirm title="Удалить жанр?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                            <a>Удалить</a>
                        </Popconfirm>
                    </span>
                )
            },
        }];
        
        return (
            <div className="halls-page">
                <h1>Жанры</h1>
                <Row type="flex" style={{marginBottom: 16}}>
                    <Popconfirm title="Удалить выбранные жанры?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                        <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                    </Popconfirm>
                    <Button onClick={() => this.handleCreate()} type="primary" style={{marginLeft: 8}}>Добавить</Button>
                </Row>
                <Table
                    pagination={needPagination}
                    loading={loading}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    columns={genresColumns}
                    dataSource={genresData}
                    locale={{emptyText: 'Нет данных'}}
                    bordered />
                <GenreEditModal
                    {...this.props}
                    onClose={this.handleCloseModal}
                    genre={selectedGenre}
                    type={modalType}
                    visible={modalVisible} />
            </div>
        );
    }
}

function mapStateToProps({genres}) {
    return {
        loading: includes([0, 1], genres.status),
        genresData: genres.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new GenresActions(new GenresServices(), dispatch)
    }
}

const connectedGenresPage = connect(mapStateToProps, mapDispatchToProps)(Genres);

export { connectedGenresPage as Genres }
