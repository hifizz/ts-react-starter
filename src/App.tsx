import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as style from './index.module.css';

interface IAppProps {
  name?: string;
}

interface IAppState {
  count: number;
}

class App extends Component<IAppProps, IAppState> {
  public defaultProps = {
    name: "fizz"
  }

  constructor(props: IAppProps) {
    super(props)
    this.state = {
      count: 0
    }
  }

  public onIncrease = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  public onDecrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  public render() {
    const { count } = this.state;
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
          <div className="App-count-app">
            <span>Current count: {count}</span>
            <button onClick={this.onIncrease} className={style.increase}>Increase</button>
            <button onClick={this.onDecrease}>Decrease</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
