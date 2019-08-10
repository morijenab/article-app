import React, { Component } from "react";
import Joi from "joi";
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
  MenuItem,
  FormHelperText,
  OutlinedInput
} from "@material-ui/core";
// import SelectCategories from './SelectCategories'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { createArticle } from "../services/articleService";
import { getCategories } from "../services/categoryService";
class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        category:"",
        abstract: "",
        body: "",
        img: ""
      },
      categories:[],
      errors: {}
    };
  }
  async componentDidMount() {
    const {data:categories} = await getCategories();
    this.setState({categories});
  }
  schema = {
    title: Joi.string()
      .required()
      .min(30)
      .max(255)
      .label("Title"),
    abstract: Joi.string()
      .required()
      .min(30)
      .label("Abstract"),
    body: Joi.string()
      .required()
      .min(30)
      .label("Body"),
    category: Joi.string()
      .required()
      .label("Category")
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message.replace(/"/g, "");
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message.replace(/"/g, "") : null;
  };
  handleChange = ({ currentTarget: input }) => {
    console.log(input)
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const article = { ...this.state.article };
    article[input.name] = input.value;
    this.setState({ article, errors: errors || {} });
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
    const article = { ...this.state.article };
    try {
      await createArticle(article);
      window.location = "/articles";
    } catch (ex) {
      console.log(ex);
    }
  };
  handleCategoryChange=(e)=>{
    const {article} = this.state;
    console.log(e.target.value)
    article.category = e.target.value;
    this.setState({article});
  }
  render() {
    const { article, errors,categories } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{ marginTop: "3rem" }}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Grid item xs={12}>
                <Typography variant="h3">Create Article</Typography>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={this.handleSubmit}>
                  <Grid item xs={12}>
                    <TextField
                      error={errors.title ? true : false}
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
                      helperText={errors.title ? errors.title : ""}
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
                    <FormHelperText>Required</FormHelperText>
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
                      error={errors.body ? true : false}
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
                      helperText={errors.body ? errors.body : ""}
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
                      <Button variant="contained" component="span">
                        Upload
                        <CloudUploadIcon style={{ marginLeft: "5px" }} />
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
                      disabled={errors.title ? true : false}
                    >
                      Create
                      <CloudUploadIcon style={{ marginLeft: "5px" }} />
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img className="left-image" src={this.state.article.img} alt="" />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default CreateArticle;
