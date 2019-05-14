import {combineReducers} from 'redux';

import loginReducer from '../app/reducers/login';



// const rootReducer = combineReducers({helloworldReducer, depositRecordsReducer, depositPageReducer, homePageReducer});
const rootReducer = combineReducers({
    loginReducer: loginReducer,

});

export default rootReducer