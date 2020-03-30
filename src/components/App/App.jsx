import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ToDoList from '../ToDoList';
import ToDoFilter from '../ToDoFilter';

import './App.css';

const App = () => {
  const toDoData = [
    { label: 'Drink Tea', important: false, id: 1 },
    { label: 'Make an awesome app', important: true, id: 2 },
    { label: 'DO SOME TASKS', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ToDoFilter />
      </div>
      <ToDoList todos={toDoData} />
    </div>
  );
};

export default App;
