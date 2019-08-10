import http from './httpService';
import config from '../config.json'
const apiEndpoint = `${config.apiEndpoint}/categories`;

export function createCategory(category){
    return http.post(apiEndpoint,category);
}
export function getCategories(){
    return http.get(apiEndpoint);
}
export function removeCategory(categoryId){
    return http.delete(`${apiEndpoint}/${categoryId}`);
}