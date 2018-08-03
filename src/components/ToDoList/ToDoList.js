import React from 'react';

import { Consumer } from '../../context/ToDoContext';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

function ToDoList() {
  return (
    <Consumer>
      {({ state }) => (
        <ul>
          {state.todos.map((todo, index) => (
            <ToDoItem key={index} index={index} todo={todo} />
          ))}
        </ul>
      )}
    </Consumer>
  );
}

export default ToDoList;
