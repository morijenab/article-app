import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon,Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      color: 'orange'
    }
  }));
const RightArrow = ({ onClick }) => {
    const classes = useStyles();
  return (
    <div className="right-arrow" onClick={onClick}>
      <Button className={classes.button}>
        <SvgIcon>
          <path d="M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z" />
        </SvgIcon>
      </Button>
    </div>
  );
};
export default RightArrow;
