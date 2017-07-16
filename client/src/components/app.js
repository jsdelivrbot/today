import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {


  render() {
    console.log("app props", this.props);
    return (
      <div>
        <Header pathname={this.props.children.props.route.path} />
        {this.props.children}
      </div>
    );
  }
}
