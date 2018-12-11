import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {omit} from 'ramda';

interface IAppProps {
  name?: string;
}

class App extends Component<IAppProps, any> {
  public render() {
    const test = {
      a: 123,
      b: "string"
    }
    const result = omit(["b"], test);
    console.log(result);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
