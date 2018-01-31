import React from 'react';
import { Row, Col, Card, Icon } from 'antd';

export class Cinemas extends React.Component {
    render() {
        return (
            <div className="cinemas-page">
                <h1>Кинотеатры</h1>
                <Row gutter={24} type="flex">
                    <Col span={6} className="cinema-item">
                        <Card
                            title="название кинотеатра"
                            hoverable
                            actions={[<Icon type="edit" />, <Icon type="delete" />]}>
                            <p>Описание кинотеатра</p>
                        </Card>
                    </Col>
                    <Col span={6} className="cinema-item cinema-add-item">
                        <Card hoverable>
                            <Icon type="plus" />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}