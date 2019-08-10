import React, { Component } from "react";
import Joi from 'joi';
import {login,google} from '../services/authService';
import config from '../config.json';
import GoogleLogin from 'react-google-login';
import {
  Container,
  CssBaseline,
  TextField,
  Typography,
  Button,
  SvgIcon,
  Grid
} from "@material-ui/core";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account:{
        email:"",
        password:""
      },
      errors:{}
    };
  }
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };
  validate = () => {
    const options = {abortEarly:false};
    const {error} = Joi.validate(this.state.account,this.schema,options);
    if(!error) return null;
    const errors = {};
    for(let item of error.details) errors[item.path[0]] = item.message.replace(/"/g, "");
    return errors;
  }
  validateProperty = ({name,value})=>{
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const {error} = Joi.validate(obj,schema);
    return error ? error.details[0].message.replace(/"/g, "") : null;
  }
  handleSubmit = async (e)=>{
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors : errors || {}})
    if(errors) return null;
    const {account} = this.state;
    try{
      await login(account);
      window.location = "/articles"
    }catch(ex){
     const data = ex.response.data;
     if(data){
      let {errors} = this.state;
      errors.email = data;
      errors.password = data;
      this.setState({errors})
     }
    }
  }
  handleChange = ({currentTarget:input})=>{
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = {...this.state.account}
    account[input.name] = input.value;
    this.setState({account,errors: errors || {}});
  }
  responseGoogle = (response) => {
    const accToken = response.accessToken;
    google({"access_token":accToken}).then((data)=>{
      const {data:token} = data;
      localStorage.setItem('token', token);
      window.location = "/";
    })
  }
  render() {
    const {account,errors} = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h3">Login</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.email ? true : false}
                  id="login-outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  className="input"
                  value={account.email}
                  onChange={this.handleChange}
                  helperText={errors.email ? errors.email : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.password ? true : false}
                  id="login-outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="password"
                  margin="normal"
                  variant="outlined"
                  className="input"
                  value={account.password}
                  onChange={this.handleChange}
                  helperText={errors.password ? errors.password : ""}
                />
              </Grid>
              <Grid item xs={6}>
                <Button disabled={this.validate() ? true : false} type="submit" variant="contained" color="primary">
                  Login
                  <SvgIcon className="btn-SvgIcon">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
                  </SvgIcon>
                </Button>
                <GoogleLogin
                  clientId={config.googleClientID}
                  buttonText="Login with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </Grid>

            </Grid>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default LogIn;
