import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {getArticles,deleteArticle} from '../services/articleService';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell, Button, Avatar, Snackbar, CssBaseline, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditeIcon from '@material-ui/icons/Edit';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articles:[],
        snackBar: {
          open:false,
          message:""
        }
    };
  }
  async componentDidMount(){
      const {data:articles} = await getArticles();
      this.setState({articles});
  }
  removeArticle = async (id) => {
    const originalData = [...this.state.articles];
    const articles = originalData.filter(article=>{
      return article._id !== id;
    })
    this.setState({articles});
    try{
      await deleteArticle(id);
    }catch(ex){
        let snackBar = {open:true,message:"You don't have access"}
        this.setState({snackBar})
        setTimeout(()=>{
          snackBar = {open:false,message:""};
          this.setState({snackBar})
        },2000)
        this.setState({articles : originalData});
    }
  }
  render() {
    const {articles:rows,snackBar} = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>                                      
    <Paper className="paper">
      <Table >
        <TableHead>
          <TableRow align="center">
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Rate</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell align="center"><Link to={`/article/${row._id}`} className="article-link">{row.title}</Link></TableCell>
              <TableCell align="center">{row.category.title}<img src={row.category.img} width="30" alt="cat"/></TableCell>
              <TableCell align="center">{row.rate}</TableCell>
              <TableCell align="center">{row.author.name}</TableCell>
              <TableCell align="center">      
                    <Avatar className="article-image" alt={row.title} src={row.img} />
              </TableCell>
              <TableCell align="center">
              <Button onClick={() => this.removeArticle(row._id)} variant="contained" color="secondary">
                <DeleteIcon/>
            </Button>
                <Link to={`/articles/update/${row._id}`}>
                  <Button variant="contained" color="primary">
                    <EditeIcon/>
                  </Button>
                </Link>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Snackbar
        variant="error"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        key=''
        open={snackBar.open}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{snackBar.message}</span>}
      />
      </Container>
      </React.Fragment>
    );
  }
}

export default Articles;
