import React from 'react';
import ToDo from '../WhatToDo';
import './ToDoList.css';

const ToDoList = ({ todos, onDeleted }) => (
  <ul className="list-group todo-list">
    { todos.map((todo) => (
      <li key={todo.id} className="list-group-item">
        <ToDo
          {...todo}
          onDeleted={() => { onDeleted(todo.id); }}
        />
      </li>
    )) }
  </ul>
);

export default ToDoList;
