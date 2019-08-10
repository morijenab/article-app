import React, { Component } from "react";
import Carousel from "../Home/carousel/Carousel";
import ScrollSlider from "../Home/ScrollSlider/ScrollSlider";
import Categories from "../Home/Categories";
import Footer from "../Home/Footer";
import {getCategories} from '../../services/categoryService';
import {getLastArticles} from '../../services/articleService';

// import {} from '../../services/articleService';
import { CssBaseline, Grid, Container } from "@material-ui/core";
// import {getCarouselItems} from '../../services/carouselService';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories:[],
        lastArticles:[],
    };
  }
  async componentDidMount() {
    const {data:categories} = await getCategories();
      const {data:lastArticles} = await getLastArticles();
      this.setState({lastArticles,categories}); 
  }
  render() {
    const {categories,lastArticles} = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid>
          <Grid item xs={12}>
            <Carousel />
          </Grid>
        </Grid>
        <Container fixed>
          <Grid container >
            <Grid item xs={12}>
              <ScrollSlider articles={lastArticles}/>
            </Grid>
            <Grid item xs={12}>
              <Categories categories={categories}/>
            </Grid>
          </Grid>
        </Container>
        <Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
