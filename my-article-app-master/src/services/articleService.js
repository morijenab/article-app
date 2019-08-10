import http from './httpService';
import config from '../config.json';

const apiEndpoint = `${config.apiEndpoint}/articles`;
export function getArticles(){
    return http.get(apiEndpoint);
}
export function getArticlesByCat(sort){
    return http.post(apiEndpoint+"/"+sort);
}
export function getArticle(articleId){
    return http.post(`${apiEndpoint}/article/${articleId}`)
}
export function createArticle(article){
    http.post(`${apiEndpoint}`,article);
}
export function updateArticle(article){
    return http.put(`${apiEndpoint}/${article._id}`,article);
}
export function deleteArticle(articleId){
    return http.delete(`${apiEndpoint}/${articleId}`);
}
export function getLastArticles(){
    return http.get(apiEndpoint+"/last");
}
