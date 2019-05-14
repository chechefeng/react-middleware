import React, {PureComponent} from 'react';
import {Row, Col, Breadcrumb} from 'antd';
import { Table } from 'antd';



export default class Loadmore extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };

    render() {
        return (
            <div>
                <Row type="flex">
                    <Col span={10} offset={1}>
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>资源监控</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>



            </div>
        )
    }
}