import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { hashHistory } from 'react-router';
import RouteMap from './router/routeMaps';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import log from './middleware/log';
import api from './middleware/api';

var createStoreWithMiddleware;
const middlewares = [thunk,api];
createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
let store = createStoreWithMiddleware(rootReducer);
ReactDOM.render(
    <Provider store={store}>
            <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
