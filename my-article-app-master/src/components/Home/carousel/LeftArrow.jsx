import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon,Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      color: 'orange'
    }
  }));
const LeftArrow = ({ onClick }) => {
    const classes = useStyles();
  return (
    <div className="left-arrow" onClick={onClick}>
      <Button color="primary" className={classes.button}>
        <SvgIcon>
          <path d="M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M7,12L12,17V14H16V10H12V7L7,12Z" />
        </SvgIcon>
      </Button>
    </div>
  );
};
export default LeftArrow;
