import includes from 'lodash/includes';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Spin, Divider, Popconfirm, Row } from 'antd';
import { FilmFormatsActions } from '../Actions/FilmFormatsActions';
import { FilmFormatsServices } from '../Services/FilmFormatsServices';
import {FilmFormatEditModal} from '../Components/EditModal';

class FilmFormats extends React.Component {
    state = {
        selectedRowKeys: [],
        modalVisible: false,
        modalType: 'CREATE',
        selectedFilmFormat: {},
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            filmFormats: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    handleEdit = (selectedFilmFormat) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedFilmFormat
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
            selectedFilmFormat: {}
        });
    };
    
    render() {
        const {loading, filmFormatsData} = this.props;
        const {selectedRowKeys, selectedFilmFormat, modalType, modalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
        
        const filmFormatsColumns = [{
            title: 'Формат фильмов',
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
                        <Popconfirm title="Удалить формат?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                            <a>Удалить</a>
                        </Popconfirm>
                    </span>
                )
            },
        }];
        
        return (
            <div className="halls-page">
                <h1>Форматы фильмов</h1>
                <Row type="flex" style={{marginBottom: 16}}>
                    <Popconfirm title="Удалить выбранные форматы?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                        <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                    </Popconfirm>
                    <Button onClick={() => this.handleCreate()} type="primary" style={{marginLeft: 8}}>Добавить</Button>
                </Row>
                <Table
                    pagination={needPagination}
                    loading={loading}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    columns={filmFormatsColumns}
                    dataSource={filmFormatsData}
                    locale={{emptyText: 'Нет данных'}}
                    bordered />
                <FilmFormatEditModal
                    {...this.props}
                    onClose={this.handleCloseModal}
                    filmFormat={selectedFilmFormat}
                    type={modalType}
                    visible={modalVisible} />
            </div>
        );
    }
}

function mapStateToProps({filmFormats}) {
    return {
        loading: includes([0, 1], filmFormats.status),
        filmFormatsData: filmFormats.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new FilmFormatsActions(new FilmFormatsServices(), dispatch)
    }
}

const connectedFilmFormatsPage = connect(mapStateToProps, mapDispatchToProps)(FilmFormats);

export { connectedFilmFormatsPage as FilmFormats }
