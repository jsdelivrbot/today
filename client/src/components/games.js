import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Games extends Component {
  render() {
    return (
      <div>Pick your game</div>
    )
  }
}

export default reduxForm({
  form: 'games',
  fields: []
})(Games);
