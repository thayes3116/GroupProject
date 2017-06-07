$(document).ready(function() {
	
	var queryURL1;

	var queryURL2;

	var cities = [
		{
			'city': 'austin',
			'Housing'  :  2,
		  	'Cost of Living'  :  2,
			'Startups'  :  5,
			'Venture Capital'  :  4,
			'Travel Connectivity'  :  1,
			'Commute'  :  2,
			'Business Freedom'  :  4,
			'Safety'  :  3,
			'Healthcare'  :  3,
			'Education'  :  3,
			'Environmental Quality ' :  4,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Internet Access'  :  5,
			'Leisure & Culture ' :  3,
			'Tolerance'  :  3,
			'Outdoors'  :  2,
		},

		{
			'city': 'denver',
			'Housing'  :  ,
		  	'Cost of Living'  :  ,
			'Startups'  :  ,
			'Venture Capital'  :  4,
			'Travel Connectivity'  :  1,
			'Commute'  :  2,
			'Business Freedom'  :  4,
			'Safety'  :  3,
			'Healthcare'  :  3,
			'Education'  :  3,
			'Environmental Quality ' :  4,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Internet Access'  :  5,
			'Leisure & Culture ' :  3,
			'Tolerance'  :  3,
			'Outdoors'  :  2,		},

		{
			'city': 'washington-dc',
			'response': ''
		},

		{
			'city': 'seattle',
			'response': ''
		},

		{
			'city': 'raleigh',
			'response': ''
		},

		{
			'city': 'boston',
			'response': ''
		},

		{
			'city': 'des-moines',
			'response': ''
		},

		{
			'city': 'salt-lake-city',
			'response': ''
		},

		{
			'city': 'colorado-springs',
			'response': ''
		},

		{
			'city': 'boise',
			'response': ''
		},

		{
			'city': 'nashville',
			'response': ''
		},

		{
			'city': 'charlotte',
			'response': ''
		},

		{
			'city': 'dallas',
			'response': ''
		},

		{
			'city': 'san-francisco-bay-area',
			'response': ''
		},

		{
			'city': 'madison',
			'response': ''
		},

		{
			'city': 'houston',
			'response': ''
		},

		{
			'city': 'minneapolis-saint-paul',
			'response': ''
		}		

	]

	var cityName;

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
			  	
			  	cityName = pop.full_name;

			  	// console.log(cityName);
			  	
			  	// console.log("Population: ", cityPop);


			  	showScores(response);
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
	    	// for (var i = 0; i < cities.length; i++) {


	    	// cities.response[i] = response;
	    	// console.log(cities[i]);

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

    		valueName = value.name;
    		console.log("", value.name, "", ": ", roundScore);
    		

    	})


    }



})