import React from 'react';
import { cube } from './math.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 2
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState(prev => ({ count: cube(prev.count) }))}>^3</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState(prev => ({ count: prev.count - 1 }))}>-</button>
      </div>
    );
  }
};