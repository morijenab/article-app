import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
  Paper,
  Avatar,
  Chip
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { getArticle } from "../services/articleService";
import { getComments, saveComment } from "../services/commentsService";
const useStyles = makeStyles(theme => ({
  image: {
    border: "1px solid gray"
  },
  divider: {
    margin: "30px 0"
  },
  commenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
    marginLeft: "10px"
  },
  container: {
    paddingBottom: "50px"
  },
  title: {
    margin: "10px 0"
  }
}));
const Article = ({ match }) => {
  const articleId = match.params.id;
  const [article, setArticle] = React.useState({});
  const [author, setAuthor] = React.useState({});
  const [category, setCategory] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [name, setName] = React.useState("");
  const [body, setBody] = React.useState("");
  useEffect(() => {
    getInfo();
    getAllComments();
  }, []);
  async function getInfo() {
    const { data: myArticle } = await getArticle(articleId);
    setArticle(myArticle);
    setAuthor(myArticle.author);
    setCategory(myArticle.category);
  }
  const getAllComments = async () => {
    const { data: comments } = await getComments(articleId);
    setComments(comments);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setComments(
      comments.concat({ name: name, body: body, articleId: articleId })
    );
  };
  const handleBodyChange = event => {
    setBody(event.target.value);
  };
  const handleNameChange = event => {
    setName(event.target.value);
  };
  useEffect(() => {
    saveComment({ name: name, body: body, articleId: articleId });
  }, [comments]);

  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
      <img className={classes.image} src={article.img} alt="" width="600" height="500"/>

      <Typography variant="h4" display="block" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Author: {author.name}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {article.date}
      </Typography>
      <Link to={`/articleArchive/${category._id}`}>
        <Chip
          avatar={
            <Avatar src={category.img} style={{ border: "1px solid gray" }} />
          }
          label={category.title}
          className={classes.chip}
          variant="outlined"
        />
      </Link>

      <Divider className={classes.divider} variant="middle" />
      <Typography variant="h6" gutterBottom>
        {article.abstract}
      </Typography>
      <Divider className={classes.divider} variant="middle" />
      <Typography variant="body1" gutterBottom>
        {article.body}
      </Typography>

      <Divider className={classes.divider} variant="middle" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Comments</Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <TextField
                id="article-outlined-name-input"
                label="Name"
                type="text"
                name="name"
                autoComplete="name"
                margin="normal"
                variant="outlined"
                className="input"
                onChange={handleNameChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="article-outlined-body-input"
                label="Body Text"
                type="text"
                name="body"
                margin="normal"
                variant="outlined"
                className="input"
                multiline={true}
                rows={10}
                rowsMax={14}
                onChange={handleBodyChange}
                value={body}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                spacing={4}
                className="btn-submit-article"
                color="primary"
              >
                Create
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
      <Paper className={classes.paper}>
        {comments.map((item, index) => {
          return (
            <Grid
              key={index}
              className={classes.commenter}
              container
              wrap="nowrap"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography variant="h6">{item.name}</Typography>
              </Grid>
              <Grid item xs>
                <Typography>{item.body}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Paper>
    </Container>
  );
};
export default Article;
