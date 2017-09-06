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
        {posts.length > 0 && posts.map((post) => (
          <div key={post.id}className="ui icon message">
					  <i className="idea icon"></i>
					  <div className="content">
					    <div className="header">
					      {post.title}
					    </div>
					    <p>{post.body}</p>
					  </div>
					</div>
        ))}
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

