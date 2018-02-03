import isNaN from 'lodash/isNaN';
import React from 'react';
import {Link} from 'react-router-dom';
import { Form, InputNumber, Button, Row, Col, Card, Checkbox } from 'antd';



const MAX_ROW_NUM = 12;
const MAX_COL_NUM = 30;

export class HallScheme extends React.Component {
    state = {
        row: null,
        col: null,
        scheme: null,
        dbScheme: {}
    };
    
    parseScheme = (row, col) => {
        if (!row || !col) {
            return null;
        }
        
        let scheme = [];
        let dbScheme = {};
        
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                scheme.push(<Checkbox onChange={this.handleCheck} defaultChecked key={`${r+1}-${c+1}`} data-id={`${r+1}-${c+1}`}/>);
                dbScheme[`${r+1}-${c+1}`] = 1;
            }
            scheme.push(<br key={r+100} />);
        }
        
        this.setState({
            scheme,
            dbScheme
        });
    };
    
    handleCheck = (e) => {
        const id = e.target['data-id'];
        this.setState(prevState => ({
            dbScheme: {
                ...prevState.dbScheme,
                [id]: +e.target.checked
            }
        }));
    };
    
    handleRowChange = (value) => {
        let row = parseInt(value, 10);
    
        row = !isNaN(row) ? (row > MAX_ROW_NUM ? MAX_ROW_NUM : row) : 0;
        
        this.setState({
            row
        }, () => {
            this.parseScheme(this.state.row, this.state.col);
        });
    };
    
    handleColChange = (value) => {
        let col = parseInt(value, 10);
    
        col = !isNaN(col) ? (col > MAX_COL_NUM ? MAX_COL_NUM : col) : 0;
        
        this.setState({
            col
        }, () => {
            this.parseScheme(this.state.row, this.state.col);
        });
    };
    
    render() {
        const {scheme, row, col} = this.state;
        return (
            <Row type="flex">
                <Col span={24}>
                    <h3>Схема:</h3>
                </Col>
                <Col span={2}>
                    <InputNumber placeholder="Строк" value={row} onChange={this.handleRowChange} min={0} max={MAX_ROW_NUM} />
                </Col>
                <Col span={2}>
                    <InputNumber placeholder="Колонок" value={col} onChange={this.handleColChange} min={0} max={MAX_COL_NUM} />
                </Col>
                <Col span={24} className='hall-scheme'>
                    {scheme && (
                        <Card title='Выберите только существующие места:'>
                            {scheme}
                        </Card>
                    )}
                    
                </Col>
            </Row>
            
        );
    }
}
