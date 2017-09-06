import React, { Component }  from 'react';
import { fetchCategories } from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CategoryList extends Component {
	componentDidMount() {
		const url = 'http://localhost:5001/categories'
		this.props.fetchCategories(url)
	}

	render() {
		const categories = this.props.categories

	return (
		<div className="ui four item menu">
		  {categories.length > 0 && categories.map((category, idx) => (
		  	<a key={idx} className='item'>{category.name}</a>
		  ))}
		</div>
		)
	}
}

const mapStateToProps = ( state ) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchCategories: (url) => dispatch(fetchCategories(url))
  }
}

CategoryList.propTypes = {
	categories: PropTypes.array.isRequired,
	fetchCategories: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);