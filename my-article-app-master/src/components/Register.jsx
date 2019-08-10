import React, { Component } from "react";
import { registerUser } from "../services/userService";
import { loginWithJwt, google } from "../services/authService";
import GoogleLogin from "react-google-login";
import config from "../config.json";
import Joi from "joi";
import {
  Container,
  CssBaseline,
  TextField,
  Typography,
  Button,
  SvgIcon,
  Grid
} from "@material-ui/core";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        name: "",
        password: ""
      },
      errors: {}
    };
  }
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message.replace(/"/g, "");
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message.replace(/"/g, "") : null;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { account } = this.state;
    try {
      const response = await registerUser(account);
      loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/articles";
    } catch (e) {
      const errors = { ...this.state.errors };
      errors.email = e.response.data;
      this.setState({ errors });
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  responseGoogle = response => {
    const accToken = response.accessToken;
    google({ access_token: accToken }).then(data => {
      const { data: token } = data;
      localStorage.setItem("token", token);
      window.location = "/";
    });
  };
  responseFacebook = (response) => {
    console.log(response);
  }
  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h3">Register</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.name ? true : false}
                  label="Name"
                  id="outlined-name-input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  margin="normal"
                  variant="outlined"
                  className="input"
                  value={account.name}
                  onChange={this.handleChange}
                  helperText={errors.name ? errors.name : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.email ? true : false}
                  id="outlined-email-input"
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
                  id="outlined-password-input"
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
                <Button
                  disabled={this.validate() ? true : false}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  Register
                  <SvgIcon className="btn-SvgIcon">
                    <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />{" "}
                  </SvgIcon>
                </Button>
                <GoogleLogin
                  clientId={config.googleClientID}
                  buttonText="Register with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default Register;
