import {loginResponse} from "./res-config"
import {path, isNil} from "ramda";
import {loginFun} from '../app/actions/login';


const bootstrapApiResponseMiddlewareConfig = {
    ...loginResponse,
};
const response = store => next => action => {
    const context = path(["extraParams", "context"], action);
    const type = path(["extraParams", "type"], action);
    const configForAction = path(
        [context, type],
        bootstrapApiResponseMiddlewareConfig
    );
    if (!configForAction) {
        return next({
            ...action,
        });
    }
    let postSuccessHook = configForAction.postSuccessHook(action.payload)
    console.log(postSuccessHook)
    console.log(configForAction)
    console.log(action);
    store.dispatch(loginFun({
        ...action.payload,
        ...postSuccessHook,
        type: configForAction.successAction
    }));
};
export default response;
