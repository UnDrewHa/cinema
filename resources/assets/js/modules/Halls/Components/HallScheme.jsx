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
    
    handleRowChange = (value) => {
        
        let row = parseInt(value, 10);

        row = !isNaN(row) ? (row > MAX_ROW_NUM ? MAX_ROW_NUM : row) : 0;
    
        this.props.onRowChange(row);
    };
    
    handleColChange = (value) => {
        let col = parseInt(value, 10);
    
        col = !isNaN(col) ? (col > MAX_COL_NUM ? MAX_COL_NUM : col) : 0;
    
        this.props.onColChange(col);
    };
    
    render() {
        const {scheme: {row, column, scheme}, children} = this.props;
        return (
            <Row type="flex">
                <Col span={24}>
                    <h3>Схема:</h3>
                </Col>
                <Col span={2}>
                    <InputNumber placeholder="Строк" value={row} onChange={this.handleRowChange} min={0} max={MAX_ROW_NUM} />
                </Col>
                <Col span={2}>
                    <InputNumber placeholder="Колонок" value={column} onChange={this.handleColChange} min={0} max={MAX_COL_NUM} />
                </Col>
                <Col span={24} className='hall-scheme'>
                    {children && (
                        <Card title='Выберите только существующие места:'>
                            {children}
                        </Card>
                    )}
                </Col>
            </Row>
        );
    }
}
