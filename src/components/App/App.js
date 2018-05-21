// @flow
import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Header logoURL={process.env.REACT_APP_LOGO_URL} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
