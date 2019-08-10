import { Component } from 'react';
import {logOut} from '../services/authService'
class LogOut extends Component {
componentDidMount() {
    logOut();
    window.location = "/articles";
}
    render() { 
        return null;
    }
}
 
export default LogOut;