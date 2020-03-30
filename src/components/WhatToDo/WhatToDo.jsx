import React from 'react';
import './WhatToDo.css';

const ToDo = ({ label, important = false }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };

  return (
    <span className="what-to-do">
      <span className="what-to-do-label" style={style}>
        {label}
      </span>
      <button type="button" className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default ToDo;
