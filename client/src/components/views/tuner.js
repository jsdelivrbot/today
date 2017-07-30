import React, { Component } from 'react';
import String from './tuner-string';

export default class Tuner extends Component {
  renderStrings() {
    return this.props.tuning.map((tune, i) => {
      return (
        <String
          value={tune}
          key={i}
          index={i}
          changeTuning={this.props.changeTuning}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderStrings()}
      </div>
    )
  }
}
