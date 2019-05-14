import React, {Component} from 'react';
import {Row, Col, Breadcrumb, Form, Select, Table, Button, Checkbox, Pagination} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option
const ButtonGroup = Button.Group;
import "./css/index.css"

const data = [];
for (var i = 0; i < 10; i++) {
    data.push({
        key: i,
        name: `刘德华${i*3}`,
        date: 32*i,
        time: 12312,
        size: 123123123,
        state: 1313123

    })
}

class Resouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            allRowKeys: [],
            current: 1,

        }
        this.columns = [
            {
                title: "",
                dataIndex: 'chk',
                render: (text, record) => {
                    return <Checkbox
                        checked={this.state.selectedRowKeys.indexOf(record.key) > -1}
                        onChange={() => this.onSelect(record.key)}/>
                },
                align:"center"

            }, {
                title: "文件名",
                dataIndex: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
                align:"center"
            },
            {
                title: '录制日期',
                dataIndex: 'date',
                sorter: (a, b) => a.date - b.date,
                className:"thead",
                align:"center"
            }, {
                title: '时长',
                dataIndex: 'time',
                className:"thead",
                align:"center"
            }, {
                title: '大小',
                dataIndex: 'size',
                className:"thead",
                align:"center"
            }, {
                title: '状态',
                dataIndex: 'state',
                className:"thead",
                align:"center"
            }];


    };

    componentDidMount = () => {
        for (var i = 0; i < 10; i++) {
            this.state.allRowKeys.push(data[i].key)
            // console.log(this.state.allRowKeys)
        }
    };
    onSelectAll=()=>{
        this.setState({
            selectedRowKeys: this.state.allRowKeys
        })
    }
    onSelectInvert = (selectedRowKeys) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        // this.setState({selectedRowKeys});
        let _this = this
        let differenceABSet = [..._this.state.allRowKeys].filter(x => _this.state.selectedRowKeys.indexOf(x) === -1);
        console.log(differenceABSet)
        this.setState({
            selectedRowKeys: differenceABSet
        })

    };
    onSelect = (req) => {
        // console.log('selectedRowKeys changed==== ', req);
        //console.log(this.state.selectedRowKeys.indexOf(req))
        if (this.state.selectedRowKeys.indexOf(req) > -1) {
            this.state.selectedRowKeys.slice(this.state.selectedRowKeys.splice(req, 1))
        } else {
            this.state.selectedRowKeys.push(req)
        }

        this.setState({
            loading: !this.state.loading
        }, () => {
            console.log(this.state.selectedRowKeys)
        })

    }
    onChangePage = (page) => {
        this.setState({
            current: page
        })

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <div>
                    <Row type="flex">
                        <Col span={10} offset={1}>
                            <Breadcrumb>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>资源管理</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                label="条件一"
                                labelCol={{span: 10}}
                                wrapperCol={{span: 14}}
                            >
                                {getFieldDecorator('gender1', {
                                    rules: [
                                        {
                                            // required: true,
                                            message: 'Please select your gender!'
                                        }
                                    ],
                                })(
                                    <Select
                                        placeholder="Select a option and change input text above"

                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                label="条件二"
                                labelCol={{span: 10}}
                                wrapperCol={{span: 14}}
                            >
                                {getFieldDecorator('gender2', {
                                    rules: [
                                        {
                                            //required: true,
                                            message: 'Please select your gender!'
                                        }],
                                })(
                                    <Select
                                        placeholder="Select a option and change input text above"

                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem
                                label="条件三"
                                labelCol={{span: 10}}
                                wrapperCol={{span: 14}}
                            >
                                {getFieldDecorator('gender3', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please select your gender!'
                                        }],
                                })(
                                    <Select
                                        placeholder="Select a option and change input text above"

                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </div>
                <Row type="flex" style={{marginBottom: "20px"}}>
                    <Col span={6} offset={2}>
                        <ButtonGroup>
                            <Button
                                onClick={this.onSelectInvert}
                                size="large"
                                style={{width: "80px"}}
                            >反选</Button>
                            <Button
                                onClick={this.onSelectAll}
                                size="large"
                                style={{width: "80px"}}

                            >全选</Button>
                        </ButtonGroup>
                    </Col>
                    <Col span={6}>
                        <ButtonGroup>
                            <Button
                                size="large"
                                style={{width: "80px"}}>播放</Button>
                            <Button
                                size="large"
                                style={{width: "80px"}}>下载</Button>
                            <Button
                                size="large"
                                style={{width: "80px"}}>分享</Button>
                            <Button size="large"
                                    style={{width: "80px"}}
                            >删除</Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <div style={{padding: "0 40px"}}>
                    <Table
                        //rowSelection={rowSelection}
                        columns={this.columns}
                        dataSource={data}
                        pagination={false}
                        total={10}

                    />
                    <Row type="flex" style={{height: "80px"}} align="middle">
                        <Col span={8}></Col>
                        <Col span={8} push={3}>
                            <Pagination
                                //onShowSizeChange={onShowSizeChange}
                                defaultCurrent={3}
                                total={20}
                                current={this.state.current}
                                onChange={this.onChangePage}
                                showTotal={() => `共 ${10} 条`}
                            />

                        </Col>
                        <Col span={8}></Col>

                    </Row>
                </div>

            </Form>
        )
    }
}
export default Form.create()(Resouse)