import React, { Component } from 'react';

export default class ToDoFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button" className={`btn ${btnClass}`} key={name} onClick={() => onFilterChange(name)}>{label}</button>);
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
