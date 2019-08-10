import React, { Component } from "react";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {
  getArticle,
  updateArticle
} from "../services/articleService";
import {getCategories} from '../services/categoryService';
class UpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        _id: "",
        title: "",
        abstract:"",
        category:{
          _id:"",
          title:"",
          img:""
        },
        body: "",
        img:""
      },
      categories:[],
      errors:[]
    };
  }
  async componentDidMount() {
    const { match } = this.props;
    const article = { ...this.state.article };
      const { data: thisArticle } = await getArticle(match.params.id);
      const { data: categories } = await getCategories();
      article._id = thisArticle._id;
      article.title = thisArticle.title;
      article.body = thisArticle.body;
      article.img = thisArticle.img;
      article.abstract = thisArticle.abstract;
      article.category = thisArticle.category;
      this.setState({ article:article,categories });
  }
  handleChange = ({ currentTarget: input }) => {
    const article = { ...this.state.article };
    article[input.name] = input.value;
    this.setState({ article });
  };
  handleImage = e => {
    let cmp = this;
    function getBase64(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        article.img = reader.result;
        cmp.setState({ article });
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    }
    let article = { ...this.state.article };
    let file = e.target.files[0];
    getBase64(file);
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { article } = this.state;
    try {
        await updateArticle(article);
      
    } catch (ex) {
      console.log(ex);
    }
    window.location = "/articles";
  };
  handleCategoryChange=(e)=>{
    const {article} = this.state;
    console.log(e.target.value)
    article.category = e.target.value;
    this.setState({article});
  }
  render() {
    const { article,categories,errors } = this.state;
    return (
      <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ marginTop: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Create Article</Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={this.handleSubmit}>
              <Grid item xs={12}>
                <TextField
                  id="article-outlined-name-input"
                  label="Title"
                  type="text"
                  name="title"
                  autoComplete="title"
                  margin="normal"
                  variant="outlined"
                  className="input"
                  onChange={this.handleChange}
                  value={article.title}
                />
              </Grid>
              <Grid item xs={12}>
                  <FormControl variant="outlined" className="select-category">
                    <InputLabel htmlFor="outlined-age-simple">
                      Category
                    </InputLabel>
                    <Select
                      value={this.state.article.category}
                      onChange={this.handleCategoryChange}
                      input={<OutlinedInput labelWidth={85} name="category" id="outlined-category-simple" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {
                        categories.map((item,index)=>{
                          return <MenuItem key={index} value={item} selected>{item.title}
                          <img src={item.img} alt="cat" width="20" style={{marginLeft: '10px'}}/>
                          </MenuItem> 
                        })
                      }
                    </Select>
                    <FormHelperText>{this.state.article.category.title}<img src={this.state.article.category.img } width="30" alt="cat"/> is Selected</FormHelperText>
                  </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={errors.abstract ? true : false}
                      id="article-outlined-abstract-input"
                      label="Abstract Text"
                      type="text"
                      name="abstract"
                      margin="normal"
                      variant="outlined"
                      className="input"
                      multiline={true}
                      rows={10}
                      rowsMax={14}
                      onChange={this.handleChange}
                      value={article.abstract}
                      helperText={errors.abstract ? errors.abstract : ""}
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
                  onChange={this.handleChange}
                  value={article.body}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  id="outlined-button-file"
                  type="file"
                  multiple
                  className="upload-input"
                  onChange={this.handleImage}
                />
                <label htmlFor="outlined-button-file">
                  Image:
                  <Button variant="contained" spacing={2} component="span">
                    Upload
                    <CloudUploadIcon />
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  spacing={4}
                  className="btn-submit-article"
                  color="primary"
                >
                Update
                  <CloudUploadIcon style={{marginLeft : '5px'}}/>
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      </React.Fragment>
    );
  }
}

export default UpdateArticle;
