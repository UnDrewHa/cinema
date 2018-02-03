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
import {HallEditForm} from '../Components/EditForm';

class HallEdit extends React.Component {
    state = {
    
    };
    
    render() {
        const {loading, hallData, match: {params}} = this.props;
        const title = params.id ? "Изменить зал" : "Добавить новый зал";
    
        return (
                <div className="halls-page">
                    <h1>{title}</h1>
                    <HallEditForm {...this.props} />
                </div>
        );
    }
}

function mapStateToProps({halls}) {
    return {
        loading: includes([0, 1], halls.details.status),
        hallsData: halls.details.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new HallsActions(new HallsServices(), dispatch)
    }
}

const connectedHallEditPage = connect(mapStateToProps, mapDispatchToProps)(HallEdit);

export { connectedHallEditPage as HallEdit }
