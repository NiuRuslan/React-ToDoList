import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    query: '',
  }

  onSearchChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
    this.props.onSearchChange(query);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.query}
        onChange={this.onSearchChange}
      />
    );
  }
}
