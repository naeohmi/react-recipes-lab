import React, { Component } from 'react';

class MoreRecipes extends Component {
  render() {
    return (
      <div className="MoreRecipes">
        <p className="morerec">More Recipes By {this.props.name}</p>
        <nav className="Nav">
            <ul>
            <li><a href=" {this.props.url1} ">{this.props.recipe1}</a></li>
            <li><a href=" {this.props.url2} ">{this.props.recipe2}</a></li>
            <li><a href=" {this.props.url3} ">{this.props.recipe3}</a></li>
            <li><a href=" {this.props.url3} ">{this.props.recipe4}</a></li>
        </ul>
        </nav>
      </div>
    );
  };
};
export default MoreRecipes;