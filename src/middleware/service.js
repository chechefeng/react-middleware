import 'whatwg-fetch'
import 'es6-promise'


export function FetchPost(url, params) {
    return new Promise((resolve, reject) => {
        fetch("http://m.maoyan.com/mmdb/comments/movie/248566.json?_v_=yes&offset=1").then((response) => {
            return response.json();
        }).then(data => {
            resolve(data);
        }).catch((error) => {
            reject(error)
        });
    })
}