$(document).ready(function() {
	
	var queryURL1;

	var queryURL2;

	var cities = [
		{
			'city': 'austin',
			// 'queryURL': '',
			// 'scoreQueryURL': ''
		},

		{
			'city': 'denver'
		},

		{
			'city': 'washington-dc'
		},

		{
			'city': 'seattle'
		},

		{
			'city': 'raleigh'
		},

		{
			'city': 'boston'
		},

		{
			'city': 'des-moines'
		},

		{
			'city': 'salt-lake-city'
		},

		{
			'city': 'colorado-springs'
		},

		{
			'city': 'boise'
		},

		{
			'city': 'nashville'
		},

		{
			'city': 'charlotte'
		},

		{
			'city': 'dallas'
		},

		{
			'city': 'san-francisco-bay-area'
		},

		{
			'city': 'madison'
		},

		{
			'city': 'houston'
		},

		{
			'city': 'minneapolis-saint-paul'
		}		

	]

	for (var i = 0; i < cities.length; i++) {
		// console.log(cities[i].city); 

		// 
		// API url that grabs geoname API
		// 
		queryURL1 = "https://api.teleport.org/api/urban_areas/slug:" + cities[i].city + "/";
		
		// console.log(queryURL1);
		
		$.ajax({
        url: queryURL1,
        method: "GET"
	    }).done(function(response) {
	        // console.log("Lets see ", response);
	        var link = response._links;
	        
	        // 
	        // grabs API url inside of queryURL1 that grabs
	        // city name and population
	        // 
	        var geoID = response["_links"]["ua:identifying-city"]["href"];
			// console.log(geoID);

			$.ajax ({
				url: geoID,
			  	method: "GET"
			}).done(function(pop) {
			  	
			  	var cityPop = pop.population;
			  	
			  	var cityName = pop.full_name;

			  	// console.log(cityName);
			  	
			  	// console.log("Population: ", cityPop);

			  	showScores(pop);
			})

		})

	    // 
	    // API url that grabs the scores from the city
	    // 
	    queryURL2 =  "https://api.teleport.org/api/urban_areas/slug:" + cities[i].city + "/scores/";

	    $.ajax({
	    	url: queryURL2,
	    	method: "GET"
	    }).done(function(response) {
	    	// console.log("response ", response);

	    	showScores(response);
	    })

    // 
	// end for loop
	// 
    }



    function showScores(response) {
    	$.each(response.categories, function(key, value) {

    		var out_of_5 = value.score_out_of_10 / 2;

    		var roundScore = Math.round(out_of_5);
    		console.log("result ", key, value.name, " ", roundScore);
    	})

    	// for (var i = 0; i < cities.length; i++) {
    	// 	var name = cities[i].city;
    	// 	console.log(name);
    	// }
    }



})