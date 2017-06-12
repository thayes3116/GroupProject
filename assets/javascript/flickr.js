function flickrAPI (response){
	var flickrAPIKey = 'c7cff0c15cf991b259116b841af8142c';
	var queryURL9 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f59c9b562e2c1aed744210c690b1a763&text=austin%2C+texas&sort=relevance&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157681980284482-113bff057d626a7f&api_sig=b743093452c5a0c72c3ee8063b14fc8f';
	


$.ajax({
	url: queryURL9,
	method: 'GET'
})
.done(function(response){
 console.log(response);
    $('#image').append("<img src='"+ "https://farm" + response.photos.photo[0].farm + ".staticflickr.com/" + response.photos.photo[0].server + "/" + response.photos.photo[0].id + "_" +response.photos.photo[0].secret + "_m.jpg"+ "'>");    
  	 
//console.log(response);

})
};
flickrAPI();
