import * as actions from './action-types';
import {normalize} from 'normalizr';
import {loginFun, setAuthors} from '../app/actions/login';
import {path, isNil} from "ramda";

import {startNetwork, endNetwork} from '../app/actions/ui';
import {FetchPost} from "./service"
import  {loginApiCall} from "./api-config"
const bootstrapApiCallMiddlewareConfig = {
    ...loginApiCall,
};
const api = store => next => action => {

    const context = action.context;
    const type = action.type;
    const configForAction = path(
        [context, type],
        bootstrapApiCallMiddlewareConfig
    );
    // console.log(configForAction);

    if (!configForAction) {
        return next({
            ...action,
        });
    }
    const apiCallPayload = configForAction.payloadBuilder({store, action});
    let extraParams = {
        context,
        type,
    };
    FetchPost().then(data=>{
        // console.log(data)
        // store.dispatch(loginFun(data));
        return next({
            payload: {
                ...action.payload,
                ...data
            },
            extraParams
        });
    });

    // if (action.type !== actions.API) {
    //     return next({
    //         ...action,
    //         a: 123
    //     });
    // }
    //
    // const {url, success, schema, label} = action.payload;
    //
    // const states = store.getState();
    // console.log(states)
    //
    // // dispatch(startNetwork(label));
    // fetch(url).then(response => response.json())
    //     .then(data => {
    //         store.dispatch(loginFun(data));
    //         // dispatch(endNetwork(label));
    //
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         // dispatch(endNetwork(label))
    //     })
};


export default api;
