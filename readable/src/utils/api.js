export function fetchPosts (url) {
		return fetch( url,
	 		{ headers: { 'Authorization': 'whatever-you-want' }})
		.then(function(response) {
  		return response.json();
	}).then(function(posts) {
  		return posts
	});
}

export function fetchCategories (url) {
		return fetch( url,
	 		{ headers: { 'Authorization': 'whatever-you-want' }})
		.then(function(response) {
  		return response.json();
	}).then(function(response) {
  		return response.categories
	});
}

export function	postNewPost (url, post) {
	return fetch( url, {
		headers: { 'Authorization': 'whatever-you-want' },
		method: 'POST',
		body: JSON.stringify({ post })})
	.then(function(response) {
		return response.json();
	}).then(function(posts) {
  		return posts
	});
}