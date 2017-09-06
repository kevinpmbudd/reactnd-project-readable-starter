import * as APIutil from '../utils/api'

export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
export const ADD_NEW_POST = 'ADD_NEW_POST'

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

export function addNewPost ( post ) {
    return {
        type: ADD_NEW_POST,
        post: post
    }
}

export const fetchPosts = (url) => dispatch => (
    APIutil.fetchPosts(url)
		.then( posts => dispatch(recievePosts(posts)))
)

export const fetchCategories = (url) => dispatch => (
    APIutil.fetchCategories(url)
		.then( categories => dispatch(recieveCategories(categories)))
)

export const postNewPost = (url, post) => dispatch => (
    APIutil.postNewPost(url, post)
    .then( posts => dispatch(recievePosts(posts)))
)