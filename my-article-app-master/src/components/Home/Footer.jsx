import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
    root:{
        height: 250,
        background: '#12171f',
        marginTop: "50px"
    }
}))

const Footer = () => {
    const classes = useStyles();
    return ( 
        <Paper className={classes.root}>

        </Paper>
     );
}
 
export default Footer;