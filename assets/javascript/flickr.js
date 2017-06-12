function flickrAPI (response){
	var flickrAPIKey = 'c7cff0c15cf991b259116b841af8142c';
	var queryURL9 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3950f232459715e902de0bae5973fca3&tags=austin&per_page=1&format=json&nojsoncallback=1&auth_token=72157681933887214-d5a21ed7c3c97c3b&api_sig=2de91e176c2a19602819221b8364ccf4';



$.ajax({
	url: queryURL9,
	method: 'GET'
})
.done(function(response){
 
    $('#image').append("<img src='"+ "https://farm" + response.photo[1].farm + ".staticflickr.com/" + response.photo[1].server + "/" + response.photo[1].id + "_" +response.photo[1].secret + "_m.jpg"+ "'>");    
  	 
console.log(response);

})
};
flickrAPI();
