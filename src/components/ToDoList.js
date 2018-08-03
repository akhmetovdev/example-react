import React from 'react';
import { map } from 'ramda';

import { Consumer } from '../context/ToDoContext';
import ToDoItem from './ToDoItem';

function ToDoList() {
  return (
    <Consumer>
      {({ state }) => (
        <ul className="list-reset flex flex-col">
          {map(todo => <ToDoItem key={todo.index} todo={todo} />, state.todos)}
        </ul>
      )}
    </Consumer>
  );
}

export default ToDoList;
