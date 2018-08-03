import React from 'react';

import { Consumer } from '../../context/ToDoContext';
import './ToDoFormWrapper.css';
import ToDoForm from '../ToDoForm/ToDoForm';

function ToDoFormWrapper() {
  return (
    <Consumer>
      {({ actions }) => <ToDoForm create={actions.create} />}
    </Consumer>
  );
}

export default ToDoFormWrapper;
