import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="center">
        <div className="book-details">
          <span className="center">Фильтр</span>
          <div className="center">
            <input
              type="text"
              className="form-control search-input"
              placeholder="type to search"
              value={this.state.term}
              onChange={this.onSearchChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
