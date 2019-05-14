import React, {Component} from 'react';

import {connect} from "react-redux";
import "./css/index.css"
import Navs from "./nav"
import Footer from "./Footer"
import {loginFun,fetchAuthors} from "../../actions/login"
class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillMount() {
    }
    switch=()=>{
        this.props.fetchAuthors()
    }
    render() {
        return (
            <div >
                {/*<Navs/>*/}
                {/*{this.props.children}*/}


                {/*<Footer/>*/}
                123123
                <button
                    onClick={this.switch}
                >
                    asda
                </button>
            </div>

        )
    }
}
// 映射Redux state到组件的属性
function mapStateToProps(state) {
    console.log(state)
    return {

        isLogin:state
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        fetchAuthors: (args, cb) => dispatch(fetchAuthors(args, cb)),

    }
}

//连接组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);