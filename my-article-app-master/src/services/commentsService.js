import http from './httpService';
import config from '../config.json';
const apiEndpoint = `${config.apiEndpoint}/comments`;

export function getComments(articleId){
    return http.get(`${apiEndpoint}/${articleId}`);
}
export function saveComment(comment){
    return http.post(apiEndpoint,comment);
}
