import { combineReducers } from 'redux'
import { RECIEVE_POSTS } from '../actions'

function posts(state = [], action) {
    switch (action.type) {
        case RECIEVE_POSTS:
            return action.posts;

        default:
            return state;
    }
}

export default combineReducers({
	posts,
})