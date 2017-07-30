import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import String from './tuner-string';
import * as actions from '../../actions';

class Tuner extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuning: []
    };
  }

  handleFormSubmit(formProps) {
     return console.log(formProps);
   }

  render() {

    const { handleSubmit, fields: {string1, string2, string3, string4, string5, string6}} = this.props;

    return (
      <form className="tuner" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <String {...string1} className="string1"/>
        <String {...string2} className="string2"/>
        <String {...string3} className="string3"/>
        <String {...string4} className="string4"/>
        <String {...string5} className="string5"/>
        <String {...string6} className="string6"/>
        <button action="submit" className="btn submitTuning">Change Tuning</button>
      </form>
    )
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'tuner',
  fields: ["string1", "string2", "string3", "string4", "string5", "string6"]
}, mapStateToProps)(Tuner);
