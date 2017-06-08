var attributesChosen = [];
$(document).ready(function() {
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
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'denver',
			'Housing'  :  [2, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [4, 'Outdoors']
		},

		{
			'city': 'washington-dc',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [1, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [1, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [5, 'Leisure & Culture'],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'seattle',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [1, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [3, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [4, 'Leisure & Culture'],
			'Outdoors'  :  [4, 'Outdoors']
		},

		{
			'city': 'raleigh',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [4, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'boston',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [4, 'Safety'],
			'Education'  :  [4, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [4, 'Leisure & Culture'],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'des-moines',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [1, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'salt-lake-city',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [3, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'colorado-springs',
			'Housing'  :  [2, 'Housing'],
		  	'Cost of Living'  :  [0, 'Cost of Living'],
			'Commute'  :  [1, 'Commute'],
			'Safety'  :  [3, 'Safety'], 
			'Education'  :  [2, 'Education'], 
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'], 
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [2, 'Leisure & Culture'],
			'Outdoors'  :  [4, 'Outdoors']
		},

		{
			'city': 'boise',
			'Housing'  :  [4, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [1, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [2, 'Leisure & Culture'],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'nashville',
			'Housing'  :  [2, 'Housing'],
		  	'Cost of Living'  :  [2, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [3, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [4, 'Leisure & Culture'],
			'Outdoors'  :  [1, 'Outdoors']
		},

		{
			'city': 'charlotte',
			'Housing'  :  3,
		  	'Cost of Living'  :  2,
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [1, 'Outdoors']
		},

		{
			'city': 'dallas',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [2, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [3, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [4, 'Leisure & Culture'],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'san-francisco-bay-area',
			'Housing'  :  [1, 'Housing'],
		  	'Cost of Living'  :  [1, 'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [4, 'Education'],
			'Environmental Quality' :  [3, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [5, 'Leisure & Culture'],
			'Outdoors'  :  [4, 'Outdoors']
		},

		{
			'city': 'madison',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'], 
			'Commute'  :  [3, 'Commute'],
			'Safety'  :  [4, 'Safety'],
			'Education'  :  [3, 'Education'],
			'Environmental Quality' :  [5, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [2, 'Leisure & Culture'],
			'Outdoors'  :  [2, 'Outdoors']
		},

		{
			'city': 'houston',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [3, 'Cost of Living'],
			'Commute'  :  [2,'Commute'],
			'Safety'  :  [1, 'Safety'],
			'Education'  :  [2, 'Education'],
			'Environmental Quality' :  [3, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [4, 'Leisure & Culture'],
			'Outdoors'  :  [3, 'Outdoors']
		},

		{
			'city': 'minneapolis-saint-paul',
			'Housing'  :  [3, 'Housing'],
		  	'Cost of Living'  :  [2,'Cost of Living'],
			'Commute'  :  [2, 'Commute'],
			'Safety'  :  [3, 'Safety'],
			'Education'  :  [3, 'Education'],
			'Environmental Quality' :  [4, 'Environmental Quality'],
			'Economy'  :  [3, 'Economy'],
			'Taxation'  :  [2, 'Taxation'],
			'Leisure & Culture' :  [3, 'Leisure & Culture'],
			'Outdoors'  :  [3, 'Outdoors']
		}		
	];

	var cityName;
	// **** SAM Y MARIO **** //
var userName;
var categories = ['Housing', 'Cost of Living', 'Education', 'Public Safety', "Outdoors Accessibility", "Culture & Leisure", "Taxation", 'Economy', 'Environment Quality'];


var numberOfClicks = 0;

window.onload = function () {

   // SUBMIT BTN on click hidden:
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
    // GRAB 3 BTN OPTIONS store in var attributesChosen[]:
    $('#questionnaire').on('click','.attributes', function(){
       var dataName = $(this).data('category');
        console.log(dataName);
        attributesChosen.push(dataName);
        numberOfClicks++;
        console.log(numberOfClicks)
        $(this).hide();
        if (numberOfClicks === 3) {
            $('#questionnaire').hide();
            showCharts();
        }
        console.log(attributesChosen);
    });
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

    // var attributesChosen = ["Housing", "Commute", "Safety"]

// for (var i = 0; i < cities.length; i++) {
	function showCharts(){
    switch (attributesChosen[0]) {
    	case cities[0].Housing[1]:
    		// $("#butotns").empty()
    		showHousingList();
    		 console.log("works");
    		break;

    	case cities[0]["Cost of Living"][1]:
    		// $("#butotns").empty()
    		showCostofLivingList();
    		// console.log("works");
    		break; 

    	case cities[0].Commute[1]:
    		// $("#butotns").empty()
    		showCommuteList();
    		// console.log("works");
    		break;

    	case cities[0].Safety[1]:
    		// $("#butotns").empty()
    		showSafetyList();
    		// console.log("works");
    		break;

    	case cities[0].Education[1]:
    		// $("#butotns").empty()
    		showEducationList();
    		// console.log("works");
    		break;

    	case cities[0]["Environmental Quality"][1]:
    		// $("#butotns").empty()
    		showEnvironmentalQualityList();
    		// console.log("works");
    		break;

    	case cities[0].Economy[1]:
    		// $("#butotns").empty()
    		showEconomyList();
    		// console.log("works");
    		break;

    	case cities[0].Taxation[1]:
    		// $("#butotns").empty()
    		showTaxationList();
    		// console.log("works");
    		break;	

    	case cities[0]["Leisure & Culture"][1]:
    		// $("#butotns").empty()
    		showLeisureCultureList();
    		// console.log("works");
    		break;				

    	case cities[0].Outdoors[1]:
    		// $("#butotns").empty()
    		showOutdoorsList();
    		// console.log("works");
    		break;			
    }
    switch (attributesChosen[1]) {
    	case cities[0].Housing[1]:
    		// $("#butotns").empty()
    		showHousingList();
    		// console.log("works");
    		break;

    	case cities[0]["Cost of Living"][1]:
    		// $("#butotns").empty()
    		showCostofLivingList();
    		// console.log("works");
    		break; 

    	case cities[0].Commute[1]:
    		// $("#butotns").empty()
    		showCommuteList();
    		 console.log("works");
    		break;

    	case cities[0].Safety[1]:
    		// $("#butotns").empty()
    		showSafetyList();
    		console.log("works");
    		break;

    	case cities[0].Education[1]:
    		// $("#butotns").empty()
    		showEducationList();
    		// console.log("works");
    		break;

    	case cities[0]["Environmental Quality"][1]:
    		// $("#butotns").empty()
    		showEnvironmentalQualityList();
    		// console.log("works");
    		break;

    	case cities[0].Economy[1]:
    		// $("#butotns").empty()
    		showEconomyList();
    		// console.log("works");
    		break;

    	case cities[0].Taxation[1]:
    		// $("#butotns").empty()
    		showTaxationList();
    		// console.log("works");
    		break;	

    	case cities[0]["Leisure & Culture"][1]:
    		// $("#butotns").empty()
    		showLeisureCultureList();
    		// console.log("works");
    		break;				

    	case cities[0].Outdoors[1]:
    		// $("#butotns").empty()
    		showOutdoorsList();
    		// console.log("works");
    		break;			
    }
    switch (attributesChosen[2]) {
    	case cities[0].Housing[1]:
    		// $("#butotns").empty()
    		showHousingList();
    		// console.log("works");
    		break;

    	case cities[0]["Cost of Living"][1]:
    		// $("#butotns").empty()
    		showCostofLivingList();
    		// console.log("works");
    		break; 

    	case cities[0].Commute[1]:
    		// $("#butotns").empty()
    		showCommuteList();
    		// console.log("works");
    		break;

    	case cities[0].Safety[1]:
    		// $("#butotns").empty()
    		showSafetyList();
    		console.log("works");
    		break;

    	case cities[0].Education[1]:
    		// $("#butotns").empty()
    		showEducationList();
    		// console.log("works");
    		break;

    	case cities[0]["Environmental Quality"][1]:
    		// $("#butotns").empty()
    		showEnvironmentalQualityList();
    		// console.log("works");
    		break;

    	case cities[0].Economy[1]:
    		// $("#butotns").empty()
    		showEconomyList();
    		// console.log("works");
    		break;

    	case cities[0].Taxation[1]:
    		// $("#butotns").empty()
    		showTaxationList();
    		// console.log("works");
    		break;	

    	case cities[0]["Leisure & Culture"][1]:
    		// $("#butotns").empty()
    		showLeisureCultureList();
    		// console.log("works");
    		break;				

    	case cities[0].Outdoors[1]:
    		// $("#butotns").empty()
    		showOutdoorsList();
    		// console.log("works");
    		break;			
    }
 }
    // 
    //beginnings of functions to showcity lists

    function showHousingList(){
    		
        for(var i = 0; i < cities.length; i++){
            if(cities[i].Housing[0] >= 3){
                var citybutton = $('<button>')
                .attr("data-name", cities[i].city)
                .text(cities[i].city)
                $("#buttons").append(citybutton); 
                 console.log(cities[i].Housing[i]);   
            }
        }       
    }
    function showCostofLivingList(){
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
	
	
})
   
	
	



