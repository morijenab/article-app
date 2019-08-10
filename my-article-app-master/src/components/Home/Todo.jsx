import React, { useState,useEffect } from "react";
import {getArticles} from '../../services/articleService'

const todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);
  useEffect(async ()=>{
    const {data:articles} = await getArticles();
    setTodoList([...articles])
  },[]);
useEffect(()=>{
  document.addEventListener('mousemove',event=>{
    console.log(event.clientX,event.clientY);
  });
},[todoName]);
// const [todoState,setTodoState] = useState({userInput:'',todoList:[]})
  const inputChangeHandler = event => {
    setTodoName(event.target.value)
    console.log(todoName);
    // setTodoState({
    //     userInput : event.target.value,
    //     todoList : todoState.todoList
    // })
  };
  const addTodoListHandler = ()=>{
    setTodoList(todoList.concat(todoName));
    // setTodoState({
    //     userInput : todoState.userInput,
    //     todoList: todoState.todoList.concat(todoState.userInput)
    // })
  }
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button onClick={addTodoListHandler}>Add</button>
      <ul>
          {    
            todoList.map((todo,index) => {
               return <li key={index}>{todo.title}</li>
            })
          }
      </ul>
    </React.Fragment>
  );
};
export default todo;
