import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';

const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <ToDoList />
  </div>
);

ReactDOM.render(<App />,
  document.getElementById('root'));
