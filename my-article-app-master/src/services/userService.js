import http from './httpService';
import config from '../config.json'
const apiEndpoint = `${config.apiEndpoint}/users`;

export function registerUser(user){
    return http.post(apiEndpoint,user);
}
export function getProfile(){

}
export function getUsers(){
    return http.get(apiEndpoint);
}
export function removeUser(userId){
    return http.delete(`${apiEndpoint}/${userId}`);
}
export function changeRole(user){
    return http.put(`${apiEndpoint}/${user._id}`);
}
export function google(accToken){
    return http.put(`${apiEndpoint}/google`.accToken);
}
