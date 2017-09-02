import React, { Component } from 'react';
import { connect } from 'react-redux'

export default function PostList () {
  return (
    <div className=''>
      <ul>
        {this.props.posts.map((post) => (
          <li key={post}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps ( { posts } ) {
  return {
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // clickUpButton: () => dispatch(increment(1)),
    // clickDownButton: () => dispatch(decrement(1))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)