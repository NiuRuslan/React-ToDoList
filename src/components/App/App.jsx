import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import ToDoFilter from '../ToDoFilter';
import AddToDo from '../AddToDo';

import './App.css';

export default class App extends Component {
  id = 0;

  state = {
    toDoData: [
      this.createToDo('Drink Tea'),
      this.createToDo('Do awesome app'),
      this.createToDo('Done it'),
    ],
    query: '',
    filter: 'all',
  };

  createToDo(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.id++,
    };
  }

  deleteToDo = (id) => {
    this.setState(({ toDoData }) => {
      const newArray = toDoData.filter((item) => item.id !== id);
      return { toDoData: newArray };
    });
  }

  addToDo = (text) => {
    const newToDo = this.createToDo(text);

    this.setState(({ toDoData }) => {
      const newArray = [...toDoData, newToDo];
      return { toDoData: newArray };
    });
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({ toDoData }) => ({ toDoData: this.toggleProperty(toDoData, id, 'important') }));
  }

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => ({ toDoData: this.toggleProperty(toDoData, id, 'done') }));
  }

  onSearchChange = (query) => {
    this.setState({ query });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(list, query) {
    if (query.length === 0) {
      return list;
    }
    return list.filter((todo) => todo.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  filter(list, filter) {
    switch (filter) {
      case 'active':
        return list.filter((todo) => !todo.done);
      case 'done':
        return list.filter((todo) => todo.done);
      case 'all':
      default:
        return list;
    }
  }

  render() {
    const { toDoData, filter, query } = this.state;

    const visibleToDo = this.filter(this.search(toDoData, query), filter);

    const doneCounter = toDoData.filter(((el) => el.done)).length;

    const toDoCounter = toDoData.length - doneCounter;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCounter} done={doneCounter} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ToDoFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <ToDoList
          todos={visibleToDo}
          onDeleted={this.deleteToDo}
          onImportant={this.onToggleImportant}
          onDone={this.onToggleDone}
        />
        <AddToDo onAdd={this.addToDo} />
      </div>
    );
  }
}
