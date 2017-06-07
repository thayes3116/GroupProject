//$(document).ready(function() {
	var queryURL1;

	var queryURL2;

	var cities = [
		{
			'city': 'austin',
			'Housing'  :  [2, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'], 
			'Education'  :  [3, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [3, 'Leisure & Culture '],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'denver',
			'Housing'  :  [2, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [3, 'Leisure & Culture '],
			'Outdoors'  :  [4, 'Outdoors']
		},

		{
			'city': 'washington-dc',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [1, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [1, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [5, 'Leisure & Culture '],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'seattle',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [1, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [3, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [4, 'Leisure & Culture '],
			'Outdoors'  :  [4, 'Outdoors']
		},

		{
			'city': 'raleigh',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [4, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [3, 'Leisure & Culture '],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'boston',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [4, 'Safety'],
			'Education'  :  [4, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [4, 'Leisure & Culture '],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'des-moines',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [1, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality ' :  [4, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [3, 'Leisure & Culture '],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'salt-lake-city',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality ' :  [3, 'Environmental Quality '],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture ' :  [3, 'Leisure & Culture '],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'colorado-springs',
			'Housing'  :  2,
		  	'Cost of Living'  :  0,
			'Commute'  :  1,
			'Safety'  :  3,
			'Education'  :  2,
			'Environmental Quality ' :  4,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  2,
			'Outdoors'  :  4,
		},

		{
			'city': 'boise',
			'Housing'  :  4,
		  	'Cost of Living'  :  3,
			'Commute'  :  1,
			'Safety'  :  3,
			'Education'  :  2,
			'Environmental Quality ' :  4,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  2,
			'Outdoors'  :  3,
		},

		{
			'city': 'nashville',
			'Housing'  :  2,
		  	'Cost of Living'  :  2,
			'Commute'  :  2,
			'Safety'  :  3,
			'Education'  :  2,
			'Environmental Quality ' :  3,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  4,
			'Outdoors'  :  1,
		},

		{
			'city': 'charlotte',
			'Housing'  :  3,
		  	'Cost of Living'  :  2,
			'Commute'  :  2,
			'Safety'  :  3,
			'Education'  :  2,
			'Environmental Quality ' :  4,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  3,
			'Outdoors'  :  1,
		},

		{
			'city': 'dallas',
			'Housing'  :  3,
		  	'Cost of Living'  :  3,
			'Commute'  :  2,
			'Safety'  :  2,
			'Education'  :  2,
			'Environmental Quality ' :  3,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  4,
			'Outdoors'  :  2,
		},

		{
			'city': 'san-francisco-bay-area',
			'Housing'  :  1,
		  	'Cost of Living'  :  1,
			'Commute'  :  2,
			'Safety'  :  3,
			'Education'  :  4,
			'Environmental Quality ' :  3,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  5,
			'Outdoors'  :  4,
		},

		{
			'city': 'madison',
			'Housing'  :  3,
		  	'Cost of Living'  :  3,
			'Commute'  :  3,
			'Safety'  :  4,
			'Education'  :  3,
			'Environmental Quality ' :  5,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  2,
			'Outdoors'  :  2,
		},

		{
			'city': 'houston',
			'Housing'  :  3,
		  	'Cost of Living'  :  3,
			'Commute'  :  2,
			'Safety'  :  1,
			'Education'  :  2,
			'Environmental Quality ' :  3,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  4,
			'Outdoors'  :  3,
		},

		{
			'city': 'minneapolis-saint-paul',
			'Housing'  :  3,
		  	'Cost of Living'  :  2,
			'Commute'  :  2,
			'Safety'  :  3,
			'Education'  :  3,
			'Environmental Quality ' :  4,
			'Economy'  :  3,
			'Taxation'  :  2,
			'Leisure & Culture ' :  3,
			'Outdoors'  :  3,
		}		
	];

	var cityName;
	// **** SAM Y MARIO **** //
var userName;
var categories = ['Housing', 'Cost of Living', 'Education', 'Public Safety', "Outdoors Accessibility", "Culture and Leisure", "Taxation", 'Economy', 'Environment Quality'];

var attributesChosen = [];
var numberOfClicks = 0;

window.onload = function () {

   // SUBMIT BTN on click hidde:
    $('#userNameSubmit').on('click', function (event) {
        event.preventDefault();
        userName = $('#userNameInput').val().trim();
        $('#initialPrompt').hide();
        fireQuestionnaire();
    });

   // BTN OPTIONS PICK 3
    function fireQuestionnaire() {
        var question = '<h3 class="header col s12 light">Choose three attributes most important in a city to you:</h3   >';
        $('#questionDiv').html(question);
        for (var i = 0; i < categories.length; i++) {
            var categoryButton = $('<button>');
            categoryButton.addClass('attributes waves-effect waves-light btn attBtn');
            categoryButton.attr('data-category', categories[i]);
            categoryButton.text(categories[i]);
            $('#questionnaire').append(categoryButton);
        }
    }

   
};

// *****   SAM Y MARIO ****  ////

	for (var i = 0; i < cities.length; i++) {
		// console.log(cities[i].city); 
		// API url that grabs geoname API
		queryURL1 = "https://api.teleport.org/api/urban_areas/slug:" + cities[i].city + "/"	
		// console.log(queryURL1);
		
		$.ajax({
        url: queryURL1,
        method: "GET"
	    }).done(function(response) {
	        // console.log("Lets see ", response);
	        var link = response._links;
	        // grabs API url inside of queryURL1 that grabs
	        // city name and population
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

    var attributesChosen = ["Housing", "Something"]

// for (var i = 0; i < cities.length; i++) {
	
    switch (attributesChosen[0]) {
    	case cities[0].Housing[1]:
    		// $("#butotns").empty()
    		showHousingList();
    		// console.log("works");
    		break;

    	case :
    		
    }
// }
    // 
    //beginnings of functions to showcity lists

    function showHousingList(){
    		
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Housing[0] >= 3){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton); 
                // console.log(cities[i].Housing[i]);   
            }

        }
       
    }
    function showCostofLivingCityList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i]["Cost of Living"] >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showCommuteList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Commute >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showSafetyList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Safety >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showEducationList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Education >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showEnvironmentalQualityList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i]["Environmental Quality "] >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showEconomyList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Economy >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showTaxationList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Taxation >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showLeisureCultureList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i]["Leisure & Culture "] >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    function showOutdoorsList(){
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Outdoors >= 1){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton);
            }
        }
        
    }
    //end of functions to showcity lists


    function showScores(response) {

    	

    	$.each(response.categories, function(key, value) {

    		var out_of_5 = value.score_out_of_10 / 2;

    		var roundScore = Math.round(out_of_5);

    		valueName = value.name;
    		// console.log("", value.name, "", ": ", roundScore);
    		

    	})

    }
	
	
//})
	
	



