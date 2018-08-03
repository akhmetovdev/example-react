import React, { Component } from 'react';
import { empty } from 'ramda';

import './ToDoForm.css';

class ToDoForm extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { create } = this.props;

    create({ text });
    this.setState({ text: empty(text) });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input value={text} onChange={this.handleChange} />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default ToDoForm;
