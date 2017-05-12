import React, { Component } from 'react';
import './App.css';
import MoreRecipes from './MoreRecipes.js';
import Footer from './Footer.js';
class App extends Component {
  render() {
    return (
      <div>
        <MoreRecipes 
        url1="#" recipe1="Tikka Masala"
        url2="#" recipe2="Eggs Benedict" 
        url3="#" recipe3="Crawfish Etouffee" 
        url4="#" recipe4="Swedish Meatballs" />
        <Footer name="John Doe"/>,
      </div>
    );
  }
}
export default App;