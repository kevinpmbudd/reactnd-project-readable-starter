import { combineReducers } from 'redux'
import { RECIEVE_POSTS, RECIEVE_CATEGORIES } from '../actions'

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

export default combineReducers({
	posts,
	categories
})