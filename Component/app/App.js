import React, { Component } from 'react';
import {render} from 'react-dom';

/**
 * 설명 목적
 */
import HelloWorld from './HelloWorld';
//
//
///**
// * 실제로 쓰일 곳
// */
//import Login from './Pages/Login';
//
//
const root = document.getElementById('root');
//
class App extends Component {
  render(){
    return (
      <h1>Hello World!!!!!</h1>
    );
  }
}



render(<HelloWorld />, root);
