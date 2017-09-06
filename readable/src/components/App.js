import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostList from './PostList'

class App extends Component {
 
  render() {

    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

function mapStateToProps ( state ) {
  console.log( state )

  return {
    state
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)