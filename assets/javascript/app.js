   var attributesChosen = [],

        citybutton,

        citylat,

        citylong,

        citytemp,

        userName,

        APIKey = "166a433c57516f51dfab1f7edaed8413",

        categories = ['Housing', 'Cost of Living', 'Education', 'Commute', 'Safety', "Outdoors", "Leisure & Culture", "Taxation", 'Economy', 'Environmental Quality'],

	    cityName,

        numberOfClicks = 0,
 
        map;

    $(document).ready(function() {
         // $("#mainBox1").hide();
        // 
        //Capture usersName on submit button click
        //Hide name input prompt
        //Fire questionnaire function
        //
        $('#userNameSubmit').on('click', function(event) {

            event.preventDefault();

            userName = $('#userNameInput').val().trim();

            $(".name").html("Hi, " + userName)
            
            $('.name').html("Hi, " + userName)
            $('#initialPrompt').hide();
            
            fireQuestionnaire();
        });

        //
        //Function to populate questionnaire
        //
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

        //
        //Capture categories selected by user
        //Fire show city functions
        //
        $('#questionnaire').on('click', '.attributes', function() {
        
            var dataName = $(this).data('category');
        
            attributesChosen.push(dataName);

            numberOfClicks++;


            $(this).hide();
 
            if (numberOfClicks === 3) {
 
               $('.questions').hide();
 
                showCity0List();
                showCity1List();
                showCity2List();
            }
        });

        //
        //Entering city names into teleport api to get population
        //
        // for (var i = 0; i < cities.length; i++) {

        //     var queryURL1 = "https://api.teleport.org/api/urban_areas/slug:" + cities[i].city + "/"

        //     $.ajax({
        //         url: queryURL1,
        //         method: "GET"
        //     }).done(function(response) {
            
        //         var link = response._links;

        //         var geoID = response["_links"]["ua:identifying-city"]["href"];
 

        //     $.ajax({
        //         url: geoID,
        //         method: "GET"
        //     }).done(function(pop) {
                
        //         var cityPop = pop.population;
                
        //         cityName = pop.full_name;

        //         //showScores(response);
        //     })
        // })

        //    
        // API to get city scores
        // 
            // var queryURL2 = "https://api.teleport.org/api/urban_areas/slug:" + cities[i].city + "/scores/";

            // $.ajax({
            //     url: queryURL2,
            //     method: "GET"
            // }).done(function(response) {

            //     //showScores(response);

            // })
        // }
});        

        // 
        // end for loop
        // 

        //
        //Function to produce city scores as 1-5
        //Have to hard code. BOB SAID SO
        //

        // function showScores(response) {

        // 	$.each(response.categories, function(key, value) {
        // 		var out_of_5 = value.score_out_of_10 / 2;
        // 		var roundScore = Math.round(out_of_5);
        // 		valueName = value.name;
        // 	})
        // } 

   





