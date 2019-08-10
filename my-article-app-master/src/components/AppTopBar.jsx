import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar,SvgIcon } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    marginRight: theme.spacing(2)
  },
  icon:{
    marginRight: theme.spacing(2)
  },
  username:{
    width: 'auto',
    margin: '.7rem'
  }
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const AppTopBar = (props) => {
  const user = props.user;
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <HomeIcon className={classes.icon} />
        </Link>
        <Typography variant="h6" className={classes.title}>
          <Link color="inherit" to="/articles/" className={classes.link}>
            Articles
          </Link>
          <Link color="inherit" to="/articles/create" className={classes.link}>
            Create Article
          </Link>

          <Link color="inherit" to="/users/" className={classes.link}>
            Users
          </Link>
        </Typography>
        {
          !user &&
          <React.Fragment>
            <Button color="inherit">
              <Link color="inherit" to="/register/">
                Register
              </Link>
            </Button>
            <Button color="inherit">
              <Link color="inherit" to="/login/">
                Login
              </Link>
            </Button>
          </React.Fragment>
        }
        {
          user &&
          <React.Fragment>
            <Button color="inherit">
              <Link color="inherit" to="/logout">
                LogOut
              </Link>
            </Button>
            <Typography variant="h6" className={classes.username}>
              {user.name}
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src={user.avatar}
              className={classes.bigAvatar}
            />
          </React.Fragment>
        }
      </Toolbar>
    </AppBar>
  );
};

export default AppTopBar;
