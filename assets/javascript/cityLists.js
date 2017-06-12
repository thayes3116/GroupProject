        //
        //Beginning show city loops
        //
        function showCity0List() {
            $("#cityListParaDiv").html("<p id = 'cityListPara'>Here are lists of highly ranked cities in each one of the categories important to you.  Click on an individual city to get more information.</p>")  
            for (var i = 0; i < cities.length; i++) {

                if (cities[i][attributesChosen[0]][0] >= 3) {
                   
                    var queryURL3 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                        
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
                        
                        for (var i = 0; i < cities.length; i++) {
                            if($("#city0"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city0" + i).html(response.main.temp);
                                    $("#city0" + i).append(cities[i].fullName);
                                    $("#city0" + i).attr('data-lat', response.coord.lat);
                                    $("#city0" + i).attr('data-lon', response.coord.lon);
                                    
                                    citylat = $("#city0" + i).data("lat");
                                    citylong = $("#city0" + i).data("lon");

                                }                               
                            }                           
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
                        .attr("id", "city1" + i);

                    $.ajax({
                        url: queryURL4,
                        method: "GET"
                    })

                    .done(function(response) {
                        
                        for (var i = 0; i < cities.length; i++) {
                            if($("#city1"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city1" + i).html(response.main.temp);
                                    $("#city1" + i).append(cities[i].fullName);
                                    $("#city1" + i).attr('data-lat', response.coord.lat);
                                    $("#city1" + i).attr('data-lon', response.coord.lon);
                                    
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
                    
                    var queryURL5 = "http://api.openweathermap.org/data/2.5/weather?" +
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

                        for (var i = 0; i < cities.length; i++) {
                            if($("#city2"+ i).hasClass("cityBtn" + i)) {
                                var splitName = cities[i].city;
                                
                                if (splitName === response.name) {
                                    $("#city2" + i).html(response.main.temp);
                                    $("#city2" + i).append(cities[i].fullName);
                                    $("#city2" + i).attr('data-lat', response.coord.lat);
                                    $("#city2" + i).attr('data-lon', response.coord.lon);
                                    
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

//         function flickrAPI(response) {
    
//        for (var j = 0; j < cities.length; j++) {
//             var cityFlickrSearch = cities[j].city;
//             var flickrAPIKey = 'c7cff0c15cf991b259116b841af8142c';
//             var queryURL9 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c58d15a58b51ccec41c7f192cda47279&text='+ 'austin' +'&sort=relevance&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157681984208042-0ff91e65e2009b83&api_sig=4a3141748851339842c5d0c544e7b7fe';



//             $.ajax({
//                     url: queryURL9,
//                     method: 'GET'
//                 })
//                 .done(function(response) {
//                     console.log(response);
//                    /* $.each($('.cityBtn'),
//                         function(index, value) {
//                             for (j = 0; j < cities.length; j++) {
//                             if (($(this)).data('name') === cities[j].fullName)
//                             $('.cityBtn').append("<img src='" + "https://farm" + response.photos.photo[0].farm + ".staticflickr.com/" + response.photos.photo[0].server + "/" + response.photos.photo[0].id + "_" + response.photos.photo[0].secret + "_m.jpg" + "'>");

//                            } //console.log(response);
//                         })*/
//                 })
//         }
    
// };
// flickrAPI();
