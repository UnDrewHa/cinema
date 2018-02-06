import includes from 'lodash/includes';
import React from 'react';
import { connect } from 'react-redux';
import { LicensesActions } from '../Actions/LicensesActions';
import { LicensesServices } from '../Services/LicensesServices';
import {LicenseEditForm} from '../Components/EditForm';

class LicenseEdit extends React.Component {
    render() {
        const {loading, filmData, match: {params}} = this.props;
        const title = params.id ? "Изменить лицензию" : "Добавить новую лицензию";
    
        return (
                <div className="licenses-page">
                    <h1>{title}</h1>
                    <LicenseEditForm {...this.props} />
                </div>
        );
    }
}

function mapStateToProps({licenses}) {
    return {
        loading: includes([0, 1], licenses.details.status),
        licensesData: licenses.details.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new LicensesActions(new LicensesServices(), dispatch)
    }
}

const connectedLicenseEditPage = connect(mapStateToProps, mapDispatchToProps)(LicenseEdit);

export { connectedLicenseEditPage as LicenseEdit }
