import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import  Home from "../app/containers/home/index.jsx"
import  Login from "../app/containers/login/login"
import Monitor from "../app/containers/monitor/index"
import Main from "../app/containers/home/main"
import Resource from "../app/containers/resourceManagement/index"
class RouteMap extends React.Component {
    updateHandle() {
        // console.log('每次router变化之后都会触发')
    }


    routerWillLeave = () => {
        alert("离开")
    }

    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={Home}>
                    <IndexRoute component={Main}/>
                    <Route path="/monitor" component={Monitor}/>
                    <Route path="/resour" component={Resource}/>

                </Route>

                <Route path="/login" component={Login}/>

            </Router>
        )
    }
}

export default RouteMap