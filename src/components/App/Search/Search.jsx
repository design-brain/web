// @flow
import React, { Component } from 'react';
import { Button, Grid, Icon, Input, FormControl } from '@material-ui/core';
import './Search.css';

type Props = {};

class Search extends Component<Props> {
  render() {
    return (
      <Grid container id="search" spacing={16}>
        <Grid item xs={6}>
          <Input
            autoComplete="off"
            autoFocus
            fullWidth
            id="search-input"
            inputProps={{
              'arial-label': 'Search'
            }}
            placeholder="Search"
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <Button color="primary" size="small" variant="raised">
            <Icon>search</Icon>
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
