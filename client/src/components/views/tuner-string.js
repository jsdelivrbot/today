import React, { Component } from 'react';

export default class String extends Component {
  handleChange(e) {
    this.props.changeTuning(e.target.value, this.props.index)
  }

  render() {
    return (
      <select name="tune" value={this.props.value} onChange={this.handleChange.bind(this)}>
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
