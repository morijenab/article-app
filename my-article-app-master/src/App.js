// import modules
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./services/authService";

// import components
import LogIn from "./components/Login";
import Register from "./components/Register";
import Articles from "./components/Articles";
import CreateArticle from "./components/CreateArticle";
// import AppBarDrawer from "./components/AppBarDrawer";
import LogOut from "./components/LogOut";
import UpdateArticle from "./components/UpdateArticle";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./components/Users";
import Home from "./components/Home/Home";
import Article from "./components/Article";
import Categories from "./components/Categories";
import ArticleArchive from "./components/ArticleArchive";
import Ui from "./components/Ui"; /* --------------- temporary component --------------- */

// import styles
import "./App.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }
  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Router>
          {/* <AppBarDrawer user={user} /> */}
          <Switch>
            <Route path="/articleArchive/:sort?" component={ArticleArchive} />
            <Route path="/categories" component={Categories} />
            <Route path="/article/:id" component={Article} />
            <Route path="/login" component={LogIn} />
            <Route path="/logout" component={LogOut} />
            <Route path="/register" component={Register} />
            <Route path="/articles/update/:id" component={UpdateArticle} />
            <Route path="/articles/create/" component={CreateArticle} />
            <Route path="/articles" component={Articles} />
            <ProtectedRoute path="/users" component={Users} />
            <Route path="/ui" component={Ui} /> {/* --------------- temporary component --------------- */}
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
