import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header title="CHICKEN TIKKA MASALA" author="John Doe" active="1 Hour" total="5 Hours" servings="6" />
      </div>
    );
  }
}

export default App;
