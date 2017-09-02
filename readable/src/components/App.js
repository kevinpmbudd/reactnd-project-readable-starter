import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class App extends Component {
 
  render() {

    const value = this.props.value

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Button</h2>
          <button onClick={() => {
            this.props.clickUpButton(this.props.state)
          }}>Up</button>
          <button onClick={() => {
            this.props.clickDownButton(this.props.state)
          }}>Down</button>
        </div>
        <p className="App-intro">
          hello {value}
        </p>
      </div>
    );
  }
}

function mapStateToProps ( value ) {
  return {
    value
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clickUpButton: () => dispatch(increment(1)),
    clickDownButton: () => dispatch(decrement(1))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)