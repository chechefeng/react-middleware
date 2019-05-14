import React, {Component} from 'react';
import { Row, Col } from 'antd';
class Login extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    componentWillMount() {
    }

    render() {
        return (
            <div >

                <div className="header">
                    <Row>
                        <Col>Login</Col>

                    </Row>
                </div>
            </div>

        )
    }
}
// // 映射Redux state到组件的属性
// function mapStateToProps(state) {
//     // console.log(state)
//     return {
//
//         isLogin:state
//     }
// }
//
// //映射Redux actions到组件的属性
// function mapDispatchToProps(dispatch) {
//     return {
//         loginFun: (args, cb) => dispatch(loginFun(args, cb)),
//
//     }
// }

//连接组件
export default Login