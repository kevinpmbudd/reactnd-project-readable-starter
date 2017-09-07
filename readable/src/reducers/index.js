import { combineReducers } from 'redux'
import { RECIEVE_POSTS, RECIEVE_CATEGORIES, ADD_NEW_POST, UPDATE_TITLE_FIELD } from '../actions'

const initialFormState = {
      id: '',
      timestamp: Date.now(),
      title: '',
      author: '',
      category: '',
      body: '',
}

function posts(state = [], action) {
    switch (action.type) {
        case RECIEVE_POSTS:
            return action.posts;
        default:
            return state;
    }
}

function categories(state = [], action) {
    switch (action.type) {
        case RECIEVE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

function postForm(state = initialFormState, action) {
    switch (action.type) {
        case ADD_NEW_POST:
            return action.post;
        case UPDATE_TITLE_FIELD:
            return {
                title: action.title
              
            }
        default:
            return state;
    }
}


export default combineReducers({
	posts,
	categories,
    postForm

})