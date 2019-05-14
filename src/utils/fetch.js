import 'whatwg-fetch'
import 'es6-promise'
const FXBBaseURl = 'http://139.196.125.230:8085/';
export function fetchGet(url) {
    let result = fetch(url, {
        method: 'GET',
        //credentials: 'include', 
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    return result;
}

export function FetchPost(url, params) {
    let fullUrl = FXBBaseURl + url;
    let transParamsed = fxbTransParams(params);
    return new Promise((resolve, reject) => {
        fetch(fullUrl, transParamsed).then((response) => {
            return response.json();
        }).then(data => {
            resolve(data);
        }).catch((error) => {
            reject(error)
        });
    })
}