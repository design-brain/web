// @flow
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header/Header';
import Search from './Search/Search';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Grid container id="app">
        <Grid item xs={12}>
          <Header logoURL="" />
        </Grid>
        <Grid item xs={12}>
          <Search />
        </Grid>
      </Grid>
    );
  }
}

export default App;
