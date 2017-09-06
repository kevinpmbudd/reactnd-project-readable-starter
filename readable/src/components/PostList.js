import React, { Component }  from 'react';
import { fetchPosts } from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PostList extends Component {
	componentDidMount() {
		const url = 'http://localhost:5001/posts'
		this.props.fetchPosts(url)
	}

	render() {
	const posts = this.props.posts

  return (
    <div className='ui list'>
      <ul>
        {posts.length > 0 && posts.map((post) => (
          <li key={post.id}>
            <div className='item'>
            	{post.body} @ {post.timestamp}
            </div>
          </li>
        ))}
      </ul>
    </div>
   );
  }
}


const mapStateToProps = ( state ) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchPosts: (url) => dispatch(fetchPosts(url))
  }
}

PostList.propTypes = {
	posts: PropTypes.array.isRequired,
	fetchPosts: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

