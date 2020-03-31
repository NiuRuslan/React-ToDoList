import React, { Component } from 'react';

import './AddToDo.css';

export default class AddToDo extends Component {
  state = {
    label: '',
  }

  onLabelChange = (event) => {
    this.setState({ label: event.target.value });
  }

  onSumbit = (event) => {
    event.preventDefault();
    if (this.state.label.trim().length > 0) {
      this.props.onAdd(this.state.label);
    }
    this.setState({ label: '' });
  }

  render() {
    return (
      <form className="add-to-do d-flex" onSubmit={this.onSumbit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
