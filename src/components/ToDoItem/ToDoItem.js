import React from 'react';

import { Consumer } from '../../context/ToDoContext';
import './ToDoItem.css';

function ToDoItem({ index, todo }) {
  return (
    <Consumer>
      {({ actions }) => (
        <li>
          <span>{todo.text}</span>
          <button type="button" onClick={() => actions.remove(index)}>
            Remove
          </button>
        </li>
      )}
    </Consumer>
  );
}

export default ToDoItem;
