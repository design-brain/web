// @flow
import React, { Component } from 'react';
import './Header.css';

type Props = {
  logoURL: string
};

class Header extends Component<Props> {
  render() {
    return (
      <header>
        <h1 id="header-title">Design Brain</h1>
      </header>
    );
  }
}

export default Header;
