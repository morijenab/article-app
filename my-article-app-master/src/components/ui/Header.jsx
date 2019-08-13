// import modules
import React from 'react';
import Grid from '@material-ui/core/Grid';

// import images
import imageHeader1 from "../../assets/_home/imageHeader1.png";
import imageHeader2 from "../../assets/_home/imageHeader2.png";

// export default function component
export default () => {
    return (
        <header className="headerContainer">
            <Grid container className="header">
                <Grid item m={6} sm={6} xs={10} className='header1'>
                    <img
                        src={imageHeader1}
                        alt="imageHeader1"
                        style={{ height: "37x", width: "142px" }}
                    />
                    <img
                        src={imageHeader2}
                        alt="imageHeader2"
                        style={{ height: "22px", width: "135px", marginRight: "50px" }}
                    />
                </Grid>
                <Grid
                    container
                    item
                    m={6}
                    sm={6}
                    xs={2}
                    className='header2'
                    spacing={2}
                >
                    <p>ورود</p>
                    <i class="material-icons" style={{ marginLeft: "50px" }}>
                        lock_open
                    </i>
                    <p>عضویت</p>
                    <i class="material-icons" style={{ marginLeft: "100px" }}>
                        person
                    </i>
                </Grid>
            </Grid>
        </header>
    );
}