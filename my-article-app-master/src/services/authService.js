import http from './httpService';
import config from '../config.json';

import jwtDecode from 'jwt-decode';const apiEndpoint = `${config.apiEndpoint}/auth`;


export async function login(user){
    const {data:jwt} =  await http.post(`${apiEndpoint}`,user);
    localStorage.setItem('token',jwt);
}
export function logOut(){
    localStorage.removeItem('token');
}
export function getCurrentUser(){
    try{
        const token = localStorage.getItem('token');
        const user = jwtDecode(token);
        return user;
      }catch{return null;}
}
export function loginWithJwt(jwt){
    localStorage.setItem('token',jwt);
}
export function google(accToken){
    return http.post(`${apiEndpoint}/google`,accToken);
}