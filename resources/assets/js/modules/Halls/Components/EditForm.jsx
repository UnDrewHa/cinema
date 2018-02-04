import values from 'lodash/values';
import maxBy from 'lodash/maxBy';
import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input, Select, Button, Spin, message, Checkbox  } from 'antd';
const FormItem = Form.Item;
import { HallsServices } from '../Services/HallsServices';
import { HallScheme } from './HallScheme';

function schemeToOb(scheme) {
    let obj = {};
    scheme.forEach((item) => {
        obj[`${item.row}-${item.column}`] = item;
    });
    
    return obj;
}

function transformScheme(scheme) {
    return {
        column: maxBy(scheme, 'column').column,
        row: maxBy(scheme, 'row').row,
        scheme: schemeToOb(scheme)
    }
}

class EditForm extends React.Component {
    state = {
        cinemasLoading: true,
        filmFormatLoading: true,
        cinemas: {},
        filmFormats: {},
        scheme: {
            column: 0,
            row: 0,
            scheme: {}
        },
        checkboxes: []
    };

    services = new HallsServices();
    
    scheme = null;
    
    componentDidMount() {
        const {actions, hallsData, match: {params}} = this.props;
        params.id && actions.loadById(params.id);
        
        this.services.loadCinemas()
            .then(cinemas => {
                this.setState({
                    cinemasLoading: false,
                    cinemas
                });
            })
            .catch(() => message.error('Ошибка при загрузке данных.'));
    
        this.services.loadFilmFormat()
            .then(filmFormats => {
                this.setState({
                    filmFormatLoading: false,
                    filmFormats
                });
            })
            .catch(() => message.error('Ошибка при загрузке данных.'));
        
    };
    
    componentWillReceiveProps({hallsData}) {
        if (this.props.hallsData.id !== hallsData.id) {
            this.props.form.setFieldsValue(hallsData);
            hallsData.places && hallsData.places.length > 0 && this.setState({
                scheme: transformScheme(hallsData.places)
            }, this.recalculateScheme);
        }
    }
    
    recalculateScheme = () => {
        const {column, row, scheme} = this.state.scheme;
        scheme && this.parseScheme(row, column, scheme);
    };
    
    parseScheme = (row, column, scheme) => {
        let checkboxes = [];
        let newScheme = {...scheme};
        
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < column; c++) {
                const checked = scheme[`${r+1}-${c+1}`] ? !!scheme[`${r+1}-${c+1}`].is_active : true;
                checkboxes.push(<Checkbox
                    onChange={this.handleCheck}
                    checked={checked}
                    key={`${r+1}-${c+1}`}
                    data-id={`${r+1}-${c+1}`}/>);

                if (!newScheme.hasOwnProperty(`${r+1}-${c+1}`)) {
                    newScheme[`${r+1}-${c+1}`] = {
                        row: r+1,
                        column: c+1,
                        is_active: checked
                    };
                }
            }
            checkboxes.push(<br key={r+100} />);
        }
        
        this.setState(prevState => ({
            scheme: {
                scheme: newScheme,
                row,
                column
            },
            checkboxes
        }));
    };
    
    handleRowChange = (num) => {
        this.setState(prevState => ({
            scheme: {
                ...prevState.scheme,
                row: num
            }
        }), this.recalculateScheme);
    };
    
    handleColChange = (num) => {
        this.setState(prevState => ({
            scheme: {
                ...prevState.scheme,
                column: num
            }
        }), this.recalculateScheme);
    };
    
    handleCheck = (e) => {
        console.log(e);
        const id = e.target['data-id'];
        this.setState(prevState => ({
            scheme: {
                ...prevState.scheme,
                scheme: {
                    ...prevState.scheme.scheme,
                    [id]: {
                        ...prevState.scheme.scheme[id],
                        is_active: +e.target.checked
                    }
                }
            }
        }), this.recalculateScheme);
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {actions, hallsData, history, form} = this.props;
        const saveAction = hallsData.id ? actions.update : actions.store;
        const scheme = values(this.state.scheme.scheme);
        
        form.validateFields((err, values) => {
            if (!err) {
                saveAction({
                    ...hallsData,
                    ...values,
                    scheme
                }).then(() => history.replace('/halls'))
            }
        });
    };
    
    render() {
        const { hallsData, form: {getFieldDecorator} } = this.props;
        const {cinemas, cinemasLoading, filmFormats, filmFormatLoading} = this.state;
        
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
        };
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Название"
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Количество мест"
                >
                    {getFieldDecorator('place_count', {
                        rules: [
                            { required: true, message: 'Обязательное поле.' },
                            { pattern: new RegExp(/\d+/) }
                        ],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Кинотеатр"
                >
                    {getFieldDecorator('cinema_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select disabled={cinemasLoading} placeholder="Выберите кинотеатр">
                            {cinemas.data && cinemas.data.map((cinema,i) =>
                                <Select.Option key={i} value={cinema.id}>{cinema.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Формат"
                >
                    {getFieldDecorator('film_format_id', {
                        initialValue: null,
                        rules: [{
                            required: true, message: 'Обязательное поле.',
                        }]
                    })(
                        <Select disabled={filmFormatLoading} placeholder="Выберите формат">
                            {filmFormats.data && filmFormats.data.map((format,i) =>
                                <Select.Option key={i} value={format.id}>{format.name}</Select.Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    <HallScheme
                        ref={scheme => this.scheme = scheme}
                        scheme={this.state.scheme}
                        onColChange={(num) => this.handleColChange(num)}
                        onRowChange={(num) => this.handleRowChange(num)}
                        onCheck={(id, checked) => this.handleCheck(id, checked)}>
                        {this.state.checkboxes}
                    </HallScheme>
                </FormItem>
                <FormItem>
                    <Link to='/halls'><Button>Назад</Button></Link>
                    <Button style={{marginLeft: 8}} loading={this.props.loading} type="primary" htmlType="submit">Сохранить</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedEditForm = Form.create()(EditForm);
export {WrappedEditForm as HallEditForm};
