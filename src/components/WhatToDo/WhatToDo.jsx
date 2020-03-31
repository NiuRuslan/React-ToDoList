import React, { Component } from 'react';
import './WhatToDo.css';

export default class ToDo extends Component {
  state = { done: false, important: false }

  render() {
    const {
      label, onDeleted, onDone, onImportant, done, important,
    } = this.props;

    let classNames = 'what-to-do';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="what-to-do-label" onClick={onDone}>
          {label}
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
