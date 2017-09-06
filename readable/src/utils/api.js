export function goFetchPosts (url) {
		return fetch( url,
	 		{ headers: { 'Authorization': 'whatever-you-want' }})
		.then(function(response) {
  return response.json();
}).then(function(myBlob) {
  return myBlob
});
}