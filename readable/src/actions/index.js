import { goFetchPosts } from '../utils/api'

export const RECIEVE_POSTS = 'RECIEVE_POSTS';

export function recievePosts ( posts ) {
    return {
        type: RECIEVE_POSTS,
        posts
    }
}

export const fetchPosts = (url) => dispatch => (
    goFetchPosts(url)
		.then( posts => dispatch(recievePosts(posts)))
)