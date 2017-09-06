import { goFetchPosts, goFetchCategories } from '../utils/api'

export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';

export function recievePosts ( posts ) {
    return {
        type: RECIEVE_POSTS,
        posts
    }
}

export function recieveCategories ( categories ) {
    return {
        type: RECIEVE_CATEGORIES,
        categories
    }
}

export const fetchPosts = (url) => dispatch => (
    goFetchPosts(url)
		.then( posts => dispatch(recievePosts(posts)))
)

export const fetchCategories = (url) => dispatch => (
    goFetchCategories(url)
		.then( categories => dispatch(recieveCategories(categories)))
)