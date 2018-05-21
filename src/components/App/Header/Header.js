// @flow
import React, { Component } from 'react';
import './Header.css';

type Props = {
  logoURL: string
};

class Header extends Component<Props> {
  render() {
    return (
      <header className="Header">
        <img src={this.props.logoURL} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
