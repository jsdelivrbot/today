import React, { Component } from 'react';

export default class String extends Component {
  constructor(props){
    super(props);
      this.state = {
        value: "a"
      }
  }

  tune = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return (
      <select value={this.state.value} onChange={this.tune.bind(this)}>
        <option value="a">A</option>
        <option value="a#">A#</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="c#">C#</option>
        <option value="d">D</option>
        <option value="d#">D#</option>
        <option value="e">E</option>
        <option value="f">F</option>
        <option value="f#">F#</option>
        <option value="g">G</option>
        <option value="g#">G#</option>
      </select>
    )
  }
}
