import React, { Component } from "react";
import { CssBaseline, Grid, Container } from "@material-ui/core";
import Card from "./Home/ScrollSlider/Card";
import { getArticles,getArticlesByCat } from "../services/articleService";
class ArticleArichive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  async componentDidMount() {
    const sort = this.props.match.params.sort;
    if(sort){
        try{
            const { data: articles } = await getArticlesByCat(sort);
            if(articles){
                this.setState({ articles });
            }
        }catch(ex){
            const { data: articles } = await getArticles();
            this.setState({ articles });
        }
    }else{
        const { data: articles } = await getArticles();
        this.setState({ articles });
    }

  }
  render() {
    const { articles } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={2}>
            {articles.map((item, index) => {
              return (
                <Grid key={index} item xs={3}>
                  <Card item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default ArticleArichive;
