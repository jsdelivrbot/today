import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {


  render() {
    return (
      <div>
        <Header pathname={this.props.children.props.route.path} />
        {this.props.children}
      </div>
    );
  }
}
