import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Settings extends Component {
  render() {
    return (
      <div>Pick settings</div>
    )
  }
}

export default reduxForm({
  form: 'settings',
  fields: []
})(Settings);
