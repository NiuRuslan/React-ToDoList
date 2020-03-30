import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import ToDoFilter from '../ToDoFilter';

import './App.css';

export default class App extends Component {
  state = {
    toDoData: [
      { label: 'Drink Tea', important: false, id: 1 },
      { label: 'Make an awesome app', important: true, id: 2 },
      { label: 'DO SOME TASKS', important: false, id: 3 },
    ],
  };

  deleteToDo = (id) => {
    this.setState(({ toDoData }) => {
      const newArray = toDoData.filter((item) => item.id !== id);
      return { toDoData: newArray };
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ToDoFilter />
        </div>
        <ToDoList todos={this.state.toDoData} onDeleted={this.deleteToDo} />
      </div>
    );
  }
}
