import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { postNewPost, updateTitleField } from '../actions'
import uuid from 'uuid'

class CreateEditPost extends Component {
	handleSubmit() {

	}

	// updateTitle = (e) => {

	// }

	render() {
	const { id, timestamp, title, author, category, body } = this.props.postForm


	return (
		<div className='ui form'>
			<div className='inline fields'>
				<div className='seven wide field'>
					<label>title</label>
					<input 
						type='text'
						value={ title }
						onChange={this.props.updateTitle }
						placeholder='title of post'/>
				</div>
				<div className='five wide field'>
					<label>author</label>
					<input 
						type='text' 
						value={ author }
						placeholder='author of post'/>
				</div>
				<div className='five wide field'>
					<label>category</label>
					<select value={ category } className='ui search dropdown'>
						<option value=''>Select category</option>
						<option value='javascript'>Javascript</option>
						<option value='react'>React</option>
						<option value='redux'>Redux</option>
						<option value='udacity'>Udacity</option>
					</select>
				</div>
			</div>
			<div className='field'>
				<label>body</label>
				<textarea value={ body }></textarea>
			</div>
			<button className='ui button' type='submit' onClick={() => this.props.addPost(this.props.postForm)}>Submit</button>
		</div>
	
		)
	}
}

const mapStateToProps = ( state ) => {
  return {
  	postForm: {
  		 id: state.postForm.id,
  		 timestamp: state.postForm.timestamp,
  		 title: state.postForm.title,
  		 author: state.postForm.author,
  		 category: state.postForm.category,
  		 body: state.postForm.body
  	}
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
  	updateTitle: (e) => dispatch(updateTitleField(e)),
  	addPost: (post) => dispatch(postNewPost('http://localhost:5001/posts', post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditPost);