import React from 'react';

import { Consumer } from '../context/ToDoContext';

function ToDoItem({ todo }) {
  return (
    <Consumer>
      {({ actions }) => (
        <li className="flex flex-row justify-between items-center mb-5 pl-4">
          <span className="text-xl truncate text-grey-darkest">
            {todo.text}
          </span>
          <button
            type="button"
            onClick={() => actions.remove(todo.index)}
            className="w-24 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-3 px-4 border border-blue hover:border-transparent rounded focus:outline-none focus:shadow-outline"
          >
            Remove
          </button>
        </li>
      )}
    </Consumer>
  );
}

export default ToDoItem;
