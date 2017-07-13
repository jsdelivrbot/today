import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Home extends Component {
  componentWillMount(){
    this.props.fetchUserInfo();
  }

  render() {
    console.log("home props", this.props);
    return (
      <div>
        {this.props.user}
        {this.props.progress}
        {this.props.times}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    progress: state.auth.progress,
    times: state.auth.times,
   };
}

export default connect(mapStateToProps, actions)(Home);
