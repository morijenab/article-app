import React, { Component } from "react";
import Joi from "joi";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Avatar
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { createCategory,getCategories,removeCategory } from "../services/categoryService";
class Createcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        _id:"",    
        title: "",
        img: ""
      },
      categories:[],
      errors: {}
    };
  }
  async componentDidMount() {
      const {data:categories} = await getCategories();
      console.log(categories)
      this.setState({categories});
  }
  schema = {
    title: Joi.string()
      .required()
      .min(3)
      .max(20)
      .label("Title"),
      img: Joi.string()
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.category, this.schema, options);
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
    const {categories} = this.state;
    const conflict = categories.filter(item=>{
        return item.title === input.value;
    });
    console.log(conflict)
    if(conflict[0]){
        const errors = {
            title : "This Category Is Exist"
        }
      this.setState({errors})
    }else{
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const category = { ...this.state.category };
        category[input.name] = input.value;
        this.setState({ category, errors: errors || {} });
    }

  };
  handleImage = e => {
    let cmp = this;
    function getBase64(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        category.img = reader.result;
        cmp.setState({ category });
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    }
    let category = { ...this.state.category };
    let file = e.target.files[0];
    getBase64(file);
  };
  handleSubmit = async e => {
      e.preventDefault();
      const {categories} = this.state;
      const category = { ...this.state.category };
      category["_id"] = (Math.ceil(Math.random()*100000)).toString();
      const conflict = categories.filter(item=>{
        return item.title === category.title;
    });
    console.log(conflict)
    if(conflict[0]){
        const errors = {
            title : "This Category Is Exist"
        }
      this.setState({errors})
    }else{
    try {
      const newCategories = categories.concat(category)
      this.setState({categories : newCategories})
      await createCategory(category);
    } catch (ex) {
      console.log(ex);
    }
}
  };
  removeCategory = async(catId)=>{
    const originalData = [...this.state.categories];
    const categories = originalData.filter(category=>{
      return category._id !== catId
    })
    console.log(categories);
    this.setState({categories});
    try{
      await removeCategory(catId);
    }catch(ex){
       console.log(ex);
        this.setState({categories : originalData});
    }
  }
  render() {
    const { categories,category, errors } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{ marginTop: "3rem" }}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Grid item xs={12}>
                <Typography variant="h3">Create Category</Typography>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={this.handleSubmit}>
                  <Grid item xs={12}>
                    <TextField
                      error={errors.title ? true : false}
                      id="category-outlined-name-input"
                      label="Title"
                      type="text"
                      name="title"
                      autoComplete="title"
                      margin="normal"
                      variant="outlined"
                      className="input"
                      onChange={this.handleChange}
                      value={category.title}
                      helperText={errors.title ? errors.title : ""}
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
                  <Grid item xs={12} className="mt-2">
                    <Button
                      variant="contained"
                      type="submit"
                      spacing={4}
                      className="btn-submit-category"
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
              <img className="left-image" src={this.state.category.img} alt="" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Paper className="category-paper">
      <Table className="category-table">
        <TableHead>
          <TableRow align="center">
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row,index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">      
                    <Avatar className="article-image" alt={row.title} src={row.img} />
              </TableCell>
              <TableCell align="center">
              <Button onClick={() => this.removeCategory(row._id)} variant="contained" color="secondary">
                Delete
                <DeleteIcon/>
            </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

            </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Createcategory;
