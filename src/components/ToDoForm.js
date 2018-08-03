import React, { Component } from 'react';
import { empty, unless, isEmpty } from 'ramda';

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
    const safeCreate = unless(isEmpty, this.create);

    safeCreate(text);
  };

  create = text => {
    const { length, create } = this.props;

    create({ index: length, text });
    this.setState({ text: empty(text) });
  };

  render() {
    const { text } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-row justify-center mb-10"
      >
        <input
          value={text}
          onChange={this.handleChange}
          placeholder="What do you need to do?"
          className="bg-grey-lighter focus:bg-white border-transparent focus:border-blue-light text-black appearance-none inline-block mr-2 text-black border rounded py-3 px-4 focus:outline-none flex-1"
        />
        <button
          type="submit"
          className="w-24 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-3 px-4 border border-blue hover:border-transparent rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
    );
  }
}

export default ToDoForm;
