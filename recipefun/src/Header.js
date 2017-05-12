import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">
            <h1>{this.props.title}</h1>
            <p>By {this.props.author}</p>
        </div>

        <div className="details">
            <ul>
                <li>Active: {this.props.active}</li>
                <li>Total: {this.props.total}</li>
                <li>{this.props.servings} Servings</li>
            </ul>
        </div>

      </div>
    );
  }
}

export default Header;
