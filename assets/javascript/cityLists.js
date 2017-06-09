//
        //Beginning show city loops
        //
        function showCity0List() {
            for (var i = 0; i < cities.length; i++) {

                if (cities[i][attributesChosen[0]][0] >= 3) {
                   
                    var queryURL3 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName)
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn');

                    $.ajax({
                        url: queryURL3,
                        method: "GET"
                    }).done(function(response) {

                        console.log(response.coord.lat);
                        console.log(response.coord.lon);
                        console.log("Temperature (F): " + response.main.temp);

                        citybutton.attr('data-lat', response.coord.lat)
                        citybutton.attr('data-lon', response.coord.lon)
                    })

                    $("#first").append(citybutton);

                    $('#firstAttribute').html(attributesChosen[0]);
                }
            }
        }

        function showCity1List() {
            for (var i = 0; i < cities.length; i++) {
                
                if (cities[i][attributesChosen[0]][0] >= 3) {
                    
                    var queryURL4 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName) 
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn');

                    $.ajax({
                        url: queryURL4,
                        method: "GET"
                    })

                    .done(function(response) {

                        console.log(response.coord.lat);
                        console.log(response.coord.lon);
                        console.log("Temperature (F): " + response.main.temp);

                        citybutton.attr('data-lat', response.coord.lat)
                        citybutton.attr('data-lon', response.coord.lon)
                    })

                    $("#second").append(citybutton);
                    
                    $('#secondAttribute').html([attributesChosen[1]]);                   
                }
            }
        }

        function showCity2List() {
            for (var i = 0; i < cities.length; i++) {
                if (cities[i][attributesChosen[0]][0] >= 3) {
                    
                    var queryURL5 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName)
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn');

                    $.ajax({
                        url: queryURL5,
                        method: "GET"
                    })

                    .done(function(response) {

                        console.log(response.coord.lat);
                        console.log(response.coord.lon);
                        console.log("Temperature (F): " + response.main.temp);

                        citybutton.attr('data-lat', response.coord.lat)
                        citybutton.attr('data-lon', response.coord.lon)
                    })

                    $("#third").append(citybutton);
                    
                    $('#thirdAttribute').html([attributesChosen[2]]);
                    
                }
            }
        }

        //    
        //end of functions to showcity lists
        //