import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Game extends Component {
  render() {
    return (
      <div>game page</div>
    )
  }
}

export default connect(null, actions)(Game);
