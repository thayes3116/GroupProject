//
        //Beginning show city loops
        //
        function showCity0List() {
            $("#cityListParaDiv").html("<p id = 'cityListPara'>Here are lists of highly ranked cities in each one of the categories important to you.  Click on an individual city to get more information.</p>")  
            for (var i = 0; i < cities.length; i++) {

                if (cities[i][attributesChosen[0]][0] >= 3) {
                   
                    var queryURL3 = "https://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                        // console.log(cities[i].city)
                         // console.log(queryURL3);
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName)
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn')
                        .addClass('firstChart')
                        .addClass('cityBtn' + i)
                        .attr("id", "city0" + i);
                        ;

                        
                    $.ajax({
                        url: queryURL3,
                        method: "GET"
                    }).done(function(response) {
                        // console.log(response.name);
                        // console.log(response.coord.lat);
                        // console.log(response.coord.lon);
                        // console.log("Temperature (F): " + response.main.temp);
                        for (var i = 0; i < cities.length; i++) {
                            if($("#city0"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city0" + i).html(response.main.temp);
                                    $("#city0" + i).append(cities[i].fullName);
                                    $("#city0" + i).attr('data-lat', response.coord.lat);
                                    $("#city0" + i).attr('data-lon', response.coord.lon);
                                    
                                    // console.log(splitName);
                                    citylat = $("#city0" + i).data("lat");
                                    citylong = $("#city0" + i).data("lon");

                                }
                               
                            }
                           
                        }


                       
                        // console.log(response.name);
                        // if (splitName[0] === response.name) {
                            // console.log(splitName[0]);
                            // console.log(response.coord.lat);
                            // console.log(response.coord.lon);
                            // console.log("Temperature (F): " + response.main.temp);
                           
                            // $(".cityBtn").append(response.main.temp)
                        // }
                        
                        
                    })
                    
                     
                    $("#first").append(citybutton);


                    $('#firstAttribute').html(attributesChosen[0]);
                }
            }
        }




        function showCity1List() {
            for (var i = 0; i < cities.length; i++) {
                
                if (cities[i][attributesChosen[1]][0] >= 3) {
                    
                    var queryURL4 = "https://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName) 
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn')
                        .addClass('secondChart')
                        .addClass('cityBtn' + i)
                        .attr("id", "city1" + i);

                    $.ajax({
                        url: queryURL4,
                        method: "GET"
                    })

                    .done(function(response) {
                        // console.log(response.name);
                        // console.log(response.coord.lat);
                        // console.log(response.coord.lon);
                        // console.log("Temperature (F): " + response.main.temp);

                        for (var i = 0; i < cities.length; i++) {
                            if($("#city1"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city1" + i).html(response.main.temp);
                                    $("#city1" + i).append(cities[i].fullName);
                                    $("#city1" + i).attr('data-lat', response.coord.lat);
                                    $("#city1" + i).attr('data-lon', response.coord.lon);
                                    
                                    // console.log(splitName);
                                    citylat = $("#city1" + i).data("lat");
                                    citylong = $("#city1" + i).data("lon");

                                }
                               
                            }
                           
                        }
                    })

                    $("#second").append(citybutton);
                    
                    $('#secondAttribute').html([attributesChosen[1]]);                   
                }
            }
        }

        function showCity2List() {
            for (var i = 0; i < cities.length; i++) {
                if (cities[i][attributesChosen[2]][0] >= 3) {
                    
                    var queryURL5 = "https://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName)
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn')
                        .addClass('thirdChart')
                        .addClass('cityBtn' + i)
                        .attr("id", "city2" + i);

                    $.ajax({
                        url: queryURL5,
                        method: "GET"
                    })

                    .done(function(response) {
                        // console.log(response.name);
                        // console.log(response.coord.lat);
                        // console.log(response.coord.lon);
                        // console.log("Temperature (F): " + response.main.temp);

                        for (var i = 0; i < cities.length; i++) {
                            if($("#city2"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city2" + i).html(response.main.temp);
                                    $("#city2" + i).append(cities[i].fullName);
                                    $("#city2" + i).attr('data-lat', response.coord.lat);
                                    $("#city2" + i).attr('data-lon', response.coord.lon);
                                    
                                    // console.log(splitName);
                                    citylat = $("#city2" + i).data("lat");
                                    citylong = $("#city2" + i).data("lon");

                                }
                               
                            }
                           
                        }
                    })

                    $("#third").append(citybutton);
                    
                    $('#thirdAttribute').html([attributesChosen[2]]);
                    
                }
            }
        }

        //
        //end of functions to showcity lists
        //