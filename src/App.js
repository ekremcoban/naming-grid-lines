import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      // <div className="container">
      //     <div className="item item--1">1: Orange</div>
      //     <div className="item item--2">2: Green</div>
      //     <div className="item item--3">3: Violet</div>
      //     <div className="item item--4">4: Pink</div>
      //     <div className="item item--5">5: Blue</div>
      //     <div className="item item--6">6: Brown</div>
      // </div>
      <div className="container">
        <div className="item item__header">Header</div>
        <div className="item item__small-box-1">Small box 1</div>
        <div className="item item__small-box-2">Small box 2</div>
        <div className="item item__small-box-3">Small box 3</div>
        <div className="item item__slide-bar">Slidebar</div>
        <div className="item item__main-content">Main Content</div>
        <div className="item item__footer">Footer</div>
      </div>
    );
  }
}

export default App;
