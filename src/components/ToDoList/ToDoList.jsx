import React from 'react';
import ToDo from '../WhatToDo';
import './ToDoList.css';

const ToDoList = ({ todos }) => (
  <ul className="list-group todo-list">
    { todos.map((todo) => (
      <li key={todo.id} className="list-group-item">
        <ToDo {...todo} />
      </li>
    )) }
  </ul>
);

export default ToDoList;
