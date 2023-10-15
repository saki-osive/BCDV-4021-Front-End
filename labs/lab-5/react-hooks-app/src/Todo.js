import React, {useState} from "react";
import './Todo.css';
import {Button, List, ListItem, TextField} from "@mui/material";

function Todo() {


    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
      <div className="transferOutlineTodoBox">
          <h1> Todo List </h1>
          <TextField
              type="text"
              placeholder="Add a new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
              variant="contained"
              size="large"
              onClick={addTodo}
          >Add
          </Button>

          <List>
              {
                  todos.map((todo, index) => (
                      <ListItem key={index}>
                          {todo}
                          <Button  variant="outlined" onClick={ () => removeTodo(index)}>Remove</Button>
                      </ListItem>
                  ))
              }
          </List>
      </div>
    );
}

export default Todo;

