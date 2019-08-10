import http from './httpService';
import config from '../config.json';

const apiEndpoint = `${config.apiEndpoint}/carousel`;
export function getCarouselItems(){
    return http.get(apiEndpoint);
}
export function createCarouselItem(carousel){
    http.post(`${apiEndpoint}`,carousel);
}
export function deleteCarouselItem(carouselId){
    return http.delete(`${apiEndpoint}/${carouselId}`);
}