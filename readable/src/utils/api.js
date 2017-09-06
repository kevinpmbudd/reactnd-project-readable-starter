export function goFetchPosts (url) {
		return fetch( url,
	 		{ headers: { 'Authorization': 'whatever-you-want' }})
		.then(function(response) {
  		return response.json();
	}).then(function(posts) {
  		return posts
	});
}

export function goFetchCategories (url) {
		return fetch( url,
	 		{ headers: { 'Authorization': 'whatever-you-want' }})
		.then(function(response) {
  		return response.json();
	}).then(function(response) {
  		return response.categories
	});
}