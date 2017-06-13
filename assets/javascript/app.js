   var attributesChosen = [],

        citybutton,

        citylat,

        citylong,

        pastUsersString,

        citytemp,

        citiesClicked = 0,

        citiesSearched,

        userName,

        APIKey = "166a433c57516f51dfab1f7edaed8413",

        categories = ['Housing', 'Cost of Living', 'Education', 'Commute', 'Safety', "Outdoors", "Leisure & Culture", "Taxation", 'Economy', 'Environmental Quality'],

	    cityName,

        categoriesClicked = 0,
 
        map;

        //
        //Function to add search history to sidebar
        //

        function favoriteListFire(){
            $("#searchHistoryDiv").empty();
            for(var j = 0 ; j < citiesSearched.length ; j++){
                $("#searchHistoryDiv").append("<ul id='favoritelist'>")
                var listItems = $("<li>").text(citiesSearched[j]);
                $("#favoritelist").append(listItems)
            }
        }

    $(document).ready(function() {

        $("#sidebar").hide();

        // Initialize collapse button
        $(".button-collapse").sideNav();
        
        $("#resetHistory").on('click', function(){
            
            console.log("click")

            citiesSearched = [];

            //var citiesSearchedString = JSON.stringify(citiesSearched);
            
            var citiesSearchedKey = "citiesSearchedKey" + userName;

            localStorage.removeItem(citiesSearchedKey);

            favoriteListFire();
        })
        //
        //Check local storage for past users
        //

        if (window.localStorage.getItem('pastUsers')) {

            var pastUsersString = localStorage.getItem('pastUsers');

            var pastUsers = JSON.parse(pastUsersString);

            userNumber = pastUsers.length

        }else{

            pastUsers = [];

        }
        
        //
        // slider pics
        //
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = $(".mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex> slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 3000);
        }


        $("#cityListPara").hide();

        // 
        //Capture user's Name on submit button click
        //Hide name input prompt
        //Fire questionnaire function
        //
        $('#userNameSubmit').on('click', function(event) {

            event.preventDefault();

            var unverifiedUserInput = $('#userNameInput').val().trim();

            if (unverifiedUserInput == "" || !/^[a-zA-Z0-9-]+$/i.test(unverifiedUserInput)) {

                return false;

            } else {
               
                userName = unverifiedUserInput;

                $("#nameSidebar").html(userName);

                $("#sidebar").show();

                $('#initialPrompt').hide();

                fireQuestionnaire();

                if (window.localStorage.getItem("citiesSearchedKey"+userName)) {

                    var citiesSearchedString = localStorage.getItem("citiesSearchedKey"+userName);

                    citiesSearched = JSON.parse(citiesSearchedString);

                }else{

                     citiesSearched = [];

                }
            }

            //Storage userName in local storage

            if ((pastUsers.indexOf(userName)) === -1){

                pastUsers.push(userName);

                var pastUsersString = JSON.stringify(pastUsers)

                localStorage.setItem('pastUsers',pastUsersString)

                $(".name").html("Hi, " + userName);

            }else{

                //If user is returning get previously searched cities

                $(".name").html("Welcome back, " + userName + "! ");

                favoriteListFire();
                
                if (window.localStorage.getItem("citiesSearchedKey"+userName)) {

                    var citiesSearchedString = localStorage.getItem("citiesSearchedKey"+userName);

                    
                } 
            }

        });

        //
        //Back BTN to attr chose
        //
        $('#backAttr').on('click', function () {

            var question = '<h3 class="header col s12 light">Choose three attributes most important in a city to you:</h3   >';

            $('#mainbox3').hide();

            $('#first').empty();

            $('#second').empty();

            $('#third').empty();

            $('#mainBox2').show();

            $('.questions').show();

            $('#questionnaire').empty();

            $('.questions').css('display', 'block');

            categoriesClicked = 0;

            attributesChosen = [];

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
        $('#questionnaire').on('click', '.attributes', function () {

            var dataName = $(this).data('category');

            attributesChosen.push(dataName);

            categoriesClicked++;

            $(this).hide();

            if (categoriesClicked === 3) {

               $('.questions').hide();

                showCity0List();
                showCity1List();
                showCity2List();

                $('#backAttr').css('display', 'block');

                $('#mainbox3').show();

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

   





