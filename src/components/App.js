import React, { Component } from 'react';
import { __, curry, pipe, uniq, append, remove } from 'ramda';

import ToDoFormWrapper from './ToDoFormWrapper/ToDoFormWrapper';
import ToDoList from './ToDoList/ToDoList';
import { Provider } from '../context/ToDoContext';
import './App.css';

const appendIfNotExist = pipe(append, uniq);
const removeByIndex = curry(remove(__, 1, __));

class App extends Component {
  state = {
    todos: []
  };

  actions = {
    create: todo =>
      this.setState(({ todos }) => ({ todos: appendIfNotExist(todo, todos) })),
    remove: index =>
      this.setState(({ todos }) => ({ todos: removeByIndex(index, todos) }))
  };

  render() {
    const { state, actions } = this;

    return (
      <Provider value={{ state, actions }}>
        <ToDoFormWrapper />
        <ToDoList />
      </Provider>
    );
  }
}

export default App;
