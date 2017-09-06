import React, { Component }  from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid'

class CreateEditPost extends Component {
	componentDidMount() {
		
	}

	render() {
		// const { id, timestamp, title, author, category, body } = this.props.formValue

	return (
		<div className='ui form'>
			<div className='inline fields'>
				<div className='seven wide field'>
					<label>title</label>
					<input 
						type='text'
						value={ title }
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
			<button className='ui button' type='submit'>Submit</button>
		</div>
	
		)
	}
}

const mapStateToProps = ( state ) => {
  return {
  	// formValue: {
  	// 	 id: state.formValue.id,
  	// 	 timestamp: state.formValue.timestamp,
  	// 	 title: state.formValue.title,
  	// 	 author: state.formValue.author,
  	// 	 category: state.formValue.category,
  	// 	 body: state.formValue.body
  	// }
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditPost);