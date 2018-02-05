import includes from 'lodash/includes';
import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Spin, Divider, Popconfirm, Row } from 'antd';
import { CountriesActions } from '../Actions/CountriesActions';
import { CountriesServices } from '../Services/CountriesServices';
import {CountryEditModal} from '../Components/EditModal';

class Countries extends React.Component {
    state = {
        selectedRowKeys: [],
        modalVisible: false,
        modalType: 'CREATE',
        selectedCountry: {},
    };
    
    componentWillMount() {
        this.props.actions.load();
    }
    
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    
    handleBatchDelete = () => {
        this.props.actions.batchDelete({
            countries: values(this.state.selectedRowKeys)
        }).then(() => this.setState({selectedRowKeys: []}));
    };
    
    handleDelete = ({id}) => {
        this.props.actions.destroy(id);
    };
    
    handleEdit = (selectedCountry) => {
        this.setState({
            modalType: 'EDIT',
            modalVisible: true,
            selectedCountry
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
            selectedCountry: {}
        });
    };
    
    render() {
        const {loading, countriesData} = this.props;
        const {selectedRowKeys, selectedCountry, modalType, modalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const needPagination = selectedRowKeys.length > 20;
        
        const countriesColumns = [{
            title: 'Страна',
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
                        <Popconfirm title="Удалить страну?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleDelete(item)}>
                            <a>Удалить</a>
                        </Popconfirm>
                    </span>
                )
            },
        }];
        
        return (
            <div className="halls-page">
                <h1>Страна производства</h1>
                <Row type="flex" style={{marginBottom: 16}}>
                    <Popconfirm title="Удалить выбранные страны?" okText="Удалить" cancelText="Отмена" onConfirm={() => this.handleBatchDelete()}>
                        <Button type="danger" disabled={!hasSelected}>Удалить</Button>
                    </Popconfirm>
                    <Button onClick={() => this.handleCreate()} type="primary" style={{marginLeft: 8}}>Добавить</Button>
                </Row>
                <Table
                    pagination={needPagination}
                    loading={loading}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    columns={countriesColumns}
                    dataSource={countriesData}
                    locale={{emptyText: 'Нет данных'}}
                    bordered />
                <CountryEditModal
                    {...this.props}
                    onClose={this.handleCloseModal}
                    country={selectedCountry}
                    type={modalType}
                    visible={modalVisible} />
            </div>
        );
    }
}

function mapStateToProps({countries}) {
    return {
        loading: includes([0, 1], countries.status),
        countriesData: countries.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new CountriesActions(new CountriesServices(), dispatch)
    }
}

const connectedCountriesPage = connect(mapStateToProps, mapDispatchToProps)(Countries);

export { connectedCountriesPage as Countries }
