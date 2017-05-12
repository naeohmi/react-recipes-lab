import React, { Component } from 'react';

class MoreRecipes extends Component {
  render() {
    return (
      <div className="MoreRecipes">
        <p>More Recipes By {this.props.name}</p>
        <nav>
            <li><a href=" {this.props.url1} ">{this.props.recipe1}</a></li>
            <li><a href=" {this.props.url2} ">{this.props.recipe2}</a></li>
            <li><a href=" {this.props.url3} ">{this.props.recipe3}</a></li>
            <li><a href=" {this.props.url3} ">{this.props.recipe4}</a></li>
        </nav>
      </div>
    );
  };
};
export default MoreRecipes;