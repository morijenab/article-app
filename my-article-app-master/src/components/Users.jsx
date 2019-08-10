import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import {getUsers,removeUser,changeRole} from '../services/userService';
import {Paper,Table,TableHead,TableBody,TableRow,TableCell,Button,Avatar,Snackbar} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditeIcon from '@material-ui/icons/Edit';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users:[],
        snackBar: {
          open:false,
          message:"",
        },
        admin:false
    };
  }
  handleRole = async(user) => {
    const {users} = this.state;
    const index = users.indexOf(user);
    users[index].admin = !users[index].admin;
    this.setState({users});
    await changeRole(user);
  }
  async componentDidMount(){
      const {data:users} = await getUsers();
      this.setState({users})
  }
  //   async componentDidUpdate(){
  //     const {data:users} = await getUsers();
  //     this.setState({users})
  // }
  removeUser = async (id) => {
    const originalData = [...this.state.users];
    const users = originalData.filter(user=>{
      return user._id !== id;
    })
    this.setState({users});
    try{
      await removeUser(id);
    }catch(ex){
        if(ex.response && ex.response.status === 404 ){
          this.setState({snackBar:{open:true,message:"The Article already has been deleted"}})
          setTimeout(this.setState({open:false}),2000)
        }
        this.setState({snackBar:{open:true,message:"You dont have access"}})
        setTimeout(this.setState({open:false,message:""}),2000)
        this.setState({articles : originalData});
    }
  }
  render() {
    const {users:rows,snackBar} = this.state;
    return (
      <React.Fragment>                                      
    <Paper className="paper">
      <Table >
        <TableHead>
          <TableRow align="center">
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Photo</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.admin? "Admin" : "User"}</TableCell>
              <TableCell align="center">      
                    <Avatar className="article-image" alt={row.name} src={row.avatar} />
                    
              </TableCell>
              <TableCell align="center">
              <Button onClick={() => this.removeUser(row._id)} variant="contained" color="secondary">
                <DeleteIcon/>
            </Button>
                  <Button variant="contained" color="primary" onClick={() => this.handleRole(row)}>
                    {row.admin ? "Change to User" : "Change to Admin"}
                    <EditeIcon/>
                  </Button>
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
      </React.Fragment>
    );
  }
}

export default withRouter(Users);
