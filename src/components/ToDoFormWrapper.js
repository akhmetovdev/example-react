import React from 'react';
import { length } from 'ramda';

import { Consumer } from '../context/ToDoContext';
import ToDoForm from './ToDoForm';

function ToDoFormWrapper() {
  return (
    <Consumer>
      {({ state, actions }) => (
        <ToDoForm length={length(state.todos)} create={actions.create} />
      )}
    </Consumer>
  );
}

export default ToDoFormWrapper;
