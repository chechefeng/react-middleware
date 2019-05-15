import {FetchPost} from  "../../utils/fetch"
import * as actions from '../../middleware/action-types';
import * as schema from './schema';


export const loginFun=(params)=>{
    console.log(params);

    return {
        type: params.type,
        params
    }
}


export const fetchAuthors = () => ({
    type: "loginFun",
    context:"LOGIN",
    payload: {
        url: 'http://m.maoyan.com/mmdb/comments/movie/248566.json?_v_=yes&offset=1',
    },
});