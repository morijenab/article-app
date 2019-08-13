// import modules
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

// import images
import img1 from '../assets/_home/Image 1.png';
import img2 from '../assets/_home/Image 2.png';
import img3 from '../assets/_home/Image 3.png';
import img4 from '../assets/_home/Image 4.png';
import img5 from '../assets/_home/Mask Group 1.png';
import img6 from '../assets/_home/Mask Group 2.png';
import img7 from '../assets/_home/Mask Group 3.png';
import img8 from '../assets/_home/Mask Group 4.png';
import img9 from '../assets/_home/Mask Group 5.png';
import img10 from '../assets/_home/Path 199.png';
import img11 from '../assets/_home/arshad.png';
import img12 from '../assets/_home/Path 31.png';
import img13 from '../assets/_home/Group 35.png';
import img14 from '../assets/_home/laptop.png';
import img15 from '../assets/_home/children.png';
import imageHeader1 from "../assets/_home/imageHeader1.png";
import imageHeader2 from "../assets/_home/imageHeader2.png";

// import styles 
import '../styles/ui-home.css';

// basic material styles
const useStyles = makeStyles(theme => ({
    main: {
        height: 600,
        paddingTop: 150,
        backgroundColor: '#F2F2F2'
    },
    button: {
        color: '#0058DC',
        backgroundColor: 'white',
        borderRadius: 40,
        fontSize: 20,
        alignSelf: 'flex-start',
        margin: '50px 0px 0px 0px',
        width: 200,
        padding: '15px 0px'
    },
    list: {
        flexDirection: 'column',
        padding: 15,
        height: 600,
        backgroundColor: '#F2F2F2'
    },
    itemHead: {
        maxHeight: 10,
        textAlign: 'center'
    },
    itemSlide: {
        maxWidth: 255,
        maxHeight: 250,
        margin: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 12,
    },
    itemSlideFoot: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(0.5),
    },
    paper: {
        height: "100px",
        width: "150px"
    },
    bigCard: {
        width: 350,
        height: 385,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.1)',
        margin: 12
    },
}));

// export default function component
export default () => {

    const [spacing, setSpacing] = useState(2);
    const [value, setValue] = useState(2);
    const classes = useStyles();
  
    return (
        <>
            {/* --------------------- headerContainer --------------------- */}
            <div className="headerContainer">
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
            </div>


            {/* --------------------- MainTop --------------------- */}
            <div className="MainTop">
                <div>
                    <Paper className='searchBox'>
                        <InputBase
                            className='input'
                            placeholder="جستجوی موضوع یا عنوان آموزشی"
                            inputProps={{ "aria-label": "search" }}
                        />
                        <IconButton className='iconButton' aria-label="search">
                            <SearchIcon style={{color: '#0058DC', fontSize: 40}} />
                        </IconButton>
                    </Paper>

                    <div id="cardContainer">
                        <Card className='card'>
                            <CardContent>
                                <img src={img11} alt="arshad" style={{height: 65, width: 70}}/>
                                <div style={{paddingTop: 30, marginBottom: 5}}> کنکور ارشد </div>
                            </CardContent>
                        </Card>
                        <Card className='card'>
                            <CardContent>
                                <img src={img12} alt="arshad" style={{height: 70, width: 70}}/>
                                <div style={{paddingTop: 30, marginBottom: 5}}> کنکور ارشد </div>
                            </CardContent>
                        </Card>
                        <Card className='card'>
                            <CardContent>
                                <img src={img13} alt="arshad" style={{height: 65, width: 70}}/>
                                <div style={{paddingTop: 30, marginBottom: 5}}> کنکور ارشد </div>
                            </CardContent>
                        </Card>
                        <Card className='card'>
                            <CardContent>
                                <img src={img14} alt="arshad" style={{height: 70, width: 70}}/>
                                <div style={{paddingTop: 30, marginBottom: 5}}> کنکور ارشد </div>
                            </CardContent>
                        </Card>
                        <Card className='card'>
                            <CardContent>
                                <img src={img15} alt="arshad" style={{height: 65, width: 75}}/>
                                <div style={{paddingTop: 30, marginBottom: 5}}> کنکور ارشد </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* --------------------- list --------------------- */}
            <Grid container justify="center" alignContent="center" alignItems="center" className={classes.list + ' list'}>
                <Grid container md={1} justify="space-between" className='listHead'>
                    <Grid item className={classes.itemHead + ' itemHead'}>
                        دوره های کسب و کار
                    </Grid>
                    <Grid item className={classes.itemHead + ' itemHead'}>
                        <a href="#"> همه دوره ها </a>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    {[img1, img2, img3, img4].map(item => 
                        <Grid item md={3} className={classes.itemSlide + ' itemSlide'} justify="flex-start">
                            <img src={item} alt="item" style={{width: '100%'}}/>
                            <Grid item justify="center" style={{textAlign: 'right', padding: '5px 15px'}}>
                                <h3 style={{color: '#464646', fontSize: 16}}> تبدیل دیتا به اینفوگرافیک </h3>
                                <span style={{color: '#878787', fontSize: 12}}> اینفوگرافیک ایران </span>
                                <Grid container className={classes.itemSlideFoot + ' itemSlideFoot'} direction="row">
                                    <span id="time"> 2:35 
                                        <i class="material-icons">
                                            query_builder
                                        </i>
                                    </span>
                                    <span id="views"> 142
                                        <i class="material-icons">
                                            face
                                        </i>
                                    </span>
                                    <Box component="fieldset" mb={3} borderColor="transparent" style={{marginBottom: 0}}>
                                        <Rating value={value} readOnly />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>

            {/* --------------------- banner --------------------- */}
            <Grid container justify="center" alignContent="stretch" alignItems="stretch" className={classes.banner + ' banner'} direction="row">
                
                <Grid item md={4} className='bannerImage'>
                    <img src={img5} alt="img5"/>
                </Grid>

                <Grid item md={8} className='bannerText'>

                    <h3> تبدیل دیتا به انفورمایتک </h3>
                    <Grid container className={classes.itemSlideFoot + ' itemSlideFoot'} direction="row" style={{marginBottom: 50}}>
                        <span id="time" style={{color: 'white'}}> 2:35 
                            <i class="material-icons" style={{color: 'white'}}>
                                query_builder
                            </i>
                        </span>
                        <span id="views" style={{color: 'white'}}> 142
                            <i class="material-icons" style={{color: 'white'}}>
                                face
                            </i>
                        </span>
                        <Box component="fieldset" mb={3} borderColor="transparent" style={{marginBottom: 0}}>
                            <Rating value={value} readOnly />
                        </Box>
                    </Grid>

                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته    
                    </p>

                    <Button variant="contained" className={classes.button}>
                        شرکت در این دوره
                    </Button>

                </Grid>

                <div className="bannerTime">
                    <span>13</span>:
                    <span>23</span>:
                    <span>42</span>
                </div>

                <div className="bannerPrice">
                    <span> 23000 تومان </span>
                </div>

            </Grid>

            {/* --------------------- list --------------------- */}            
            <Grid container justify="center" alignContent="center" alignItems="center" className={classes.list + ' list'} style={{paddingTop: 50, marginBottom: -150}}>
                <Grid container md={1} justify="space-between" className='listHead'>
                    <Grid item className={classes.itemHead + ' itemHead'}>
                        دوره کارشناسی ارشد
                    </Grid>
                    <Grid item className={classes.itemHead + ' itemHead'}>
                        <a href=""> همه دوره ها </a>
                    </Grid>
                </Grid>
                <Grid container md={10} justify="center">
                    {[img6, img7, img8, img9].map(item => 
                        <Grid item md={3} className={classes.itemSlide + ' itemSlide'} justify="flex-start">
                            <img src={item} alt="item" style={{width: '100%'}}/>
                            <Grid item justify="center" style={{textAlign: 'right', padding: '5px 15px'}}>
                                <h3 style={{color: '#464646', fontSize: 16}}> تبدیل دیتا به اینفوگرافیک </h3>
                                <span style={{color: '#878787', fontSize: 12}}> اینفوگرافیک ایران </span>
                                <Grid container className={classes.itemSlideFoot + ' itemSlideFoot'} direction="row">
                                    <span id="time"> 2:35 
                                        <i class="material-icons">
                                            query_builder
                                        </i>
                                    </span>
                                    <span id="views"> 142
                                        <i class="material-icons">
                                            face
                                        </i>
                                    </span>
                                    <Box component="fieldset" mb={3} borderColor="transparent" style={{marginBottom: 0}}>
                                        <Rating value={value} readOnly />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>

            {/* --------------------- list --------------------- */}            
            <Grid container justify="center" alignContent="center" alignItems="center" style={{marginTop: 50, background: '#E6E6E6', paddingBottom: 40, height: 650}}>
                <Grid container md={1} justify="center" className='cardHead' style={{color: '#515151', fontSize: 26, marginBottom: 25}}>
                    بلاگ آموزش 
                </Grid>
                <Grid container md={8} justify="center" style={{minWidth: '100%'}}>
                    {[0, 1, 2].map(() => 
                        <Card className={classes.bigCard}>
                            <CardActionArea style={{minHeight: '100%'}}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="235"
                                    image={img10}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{paddingBottom: 5, color: '#616161', fontSize: 18, }}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{paddingBottom: 5, color: '#616161', fontSize: 14, }}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز،
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )}
                </Grid>
            </Grid>
        </>
    );
}