//
        //Beginning show city loops
        //
        function showCity0List() {
            for (var i = 0; i < cities.length; i++) {

                if (cities[i][attributesChosen[0]][0] >= 3) {
                   
                    var queryURL3 = "http://api.openweathermap.org/data/2.5/weather?" +
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
                        .attr("id", "city" + i);
                        ;

                        citytemp = $("<div>Hello</div>")
                        .css("float", "right")
                        .css("border", "2px solid black")

                         // console.log(citybutton.id);
                         // console.log($("citybutton").attr("id"));
                        // if ($("#city" + i).selector === "#city" ) {


                        //     console.log("$.val()");
                        // }
                         // console.log(citybutton);
                         // console.log($("#city" + i).selector);
                    $.ajax({
                        url: queryURL3,
                        method: "GET"
                    }).done(function(response) {
                        // console.log(response.name);
                        // console.log(response.coord.lat);
                        // console.log(response.coord.lon);
                        // console.log("Temperature (F): " + response.main.temp);
                        for (var i = 0; i < cities.length; i++) {
                            if($("#city"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city" + i).html(response.main.temp);
                                    $("#city" + i).append(cities[i].fullName);
                                    $("#city" + i).attr('data-lat', response.coord.lat);
                                    $("#city" + i).attr('data-lon', response.coord.lon);
                                    
                                    // console.log(splitName);
                                    citylat = $("#city" + i).data("lat");
                                    citylong = $("#city" + i).data("lon");

                                }
                               
                            }
                           
                        }


                       
                        // console.log(response.name);
                        if (splitName[0] === response.name) {
                            // console.log(splitName[0]);
                            // console.log(response.coord.lat);
                            // console.log(response.coord.lon);
                            // console.log("Temperature (F): " + response.main.temp);
                           
                            // $(".cityBtn").append(response.main.temp)
                        }
                        
                        
                    })
                    
                     
                    $("#first").append(citybutton);


                    $('#firstAttribute').html(attributesChosen[0]);
                }
            }
        }




        function showCity1List() {
            for (var i = 0; i < cities.length; i++) {
                
                if (cities[i][attributesChosen[1]][0] >= 3) {
                    
                    var queryURL4 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName) 
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn')
                        .addClass('secondChart')
                        .addClass('cityBtn' + i)
                        .attr("id", "city" + i);

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
                            if($("#city"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city" + i).html(response.main.temp);
                                    $("#city" + i).append(cities[i].fullName);
                                    $("#city" + i).attr('data-lat', response.coord.lat);
                                    $("#city" + i).attr('data-lon', response.coord.lon);
                                    
                                    // console.log(splitName);
                                    citylat = $("#city" + i).data("lat");
                                    citylong = $("#city" + i).data("lon");

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
                    
                    var queryURL5 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                    
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName)
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn')
                        .addClass('thirdChart')
                        .addClass('cityBtn' + i)
                        .attr("id", "city" + i);

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
                            if($("#city"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city" + i).html(response.main.temp);
                                    $("#city" + i).append(cities[i].fullName);
                                    $("#city" + i).attr('data-lat', response.coord.lat);
                                    $("#city" + i).attr('data-lon', response.coord.lon);
                                    
                                    // console.log(splitName);
                                    citylat = $("#city" + i).data("lat");
                                    citylong = $("#city" + i).data("lon");

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