import includes from 'lodash/includes';
import React from 'react';
import { connect } from 'react-redux';
import { FilmsActions } from '../Actions/FilmsActions';
import { FilmsServices } from '../Services/FilmsServices';
import {FilmEditForm} from '../Components/EditForm';

class FilmEdit extends React.Component {
    state = {
    
    };
    
    render() {
        const {loading, filmData, match: {params}} = this.props;
        const title = params.id ? "Изменить фильм" : "Добавить новый фильм";
    
        return (
                <div className="films-page">
                    <h1>{title}</h1>
                    <FilmEditForm {...this.props} />
                </div>
        );
    }
}

function mapStateToProps({films}) {
    return {
        loading: includes([0, 1], films.details.status),
        filmsData: films.details.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: new FilmsActions(new FilmsServices(), dispatch)
    }
}

const connectedFilmEditPage = connect(mapStateToProps, mapDispatchToProps)(FilmEdit);

export { connectedFilmEditPage as FilmEdit }
