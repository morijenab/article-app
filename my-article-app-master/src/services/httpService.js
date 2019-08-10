import axios from 'axios';
// axios.defaults.headers.delete["Access-Control-Allow-Methods"] = "*";
// axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "*";
    const token = localStorage.getItem('token');
    axios.defaults.headers.common["x-auth-token"] = token;
//You can intercept requests or responses before they are handled by then or catch.
//any error came here at first after we can cath it other places in our code via catch(ex) method in axios
axios.interceptors.response.use(null, error => {
    console.log(error)
    const expectedError = error.response && error.response.status >=400 && error.response.status < 500;
    if(!expectedError){
    //handling unexpected errors globaly
        console.log(error);
    }
    return Promise.reject(error);
    //The Promise.reject() method returns a Promise object that is rejected with a given reason.
})

  
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}