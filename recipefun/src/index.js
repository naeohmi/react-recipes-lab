import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header.js';
import RecImg from './RecImg';
import RecIng from './RecIng';
import RecPrep from './RecPrep';
import MoreRecipes from './MoreRecipes';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
	<div>
    <div className="App">
      <Header title="CHICKEN TIKKA MASALA" author="John Doe" active="1 Hour" total="5 Hours" servings="6" />
    </div>
  <RecImg />
  <RecIng />
  <RecPrep />
  <MoreRecipes />
  <Footer />
  </div>,

  document.getElementById('root')
);
