import React, { Component } from 'react';
import { __, curry, pipe, uniq, append, remove } from 'ramda';

import { Provider } from '../context/ToDoContext';
import ToDoFormWrapper from './ToDoFormWrapper';
import ToDoList from './ToDoList';

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
        <div className="container mx-auto py-10 px-5">
          <h1 className="font-black text-lg text-grey-darkest mb-10 text-center">
            React Typical ToDo App
          </h1>
          <ToDoFormWrapper />
          <ToDoList />
        </div>
      </Provider>
    );
  }
}

export default App;
