//
//Beginning show city loops
//
var flickrAPIKey = 'c7cff0c15cf991b259116b841af8142c';

function showCity0List() {
    for (var i = 0; i < cities.length; i++) {

        if (cities[i][attributesChosen[0]][0] >= 3) {

            var queryURL3 = "https://cors-bcs.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?" +
                "q=" + cities[i].city + "&units=imperial&appid=" + APIKeyWeather;

            citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                .attr("data-full", cities[i].fullName)
                .attr("data-name", cities[i].city)
                .text(cities[i].fullName)
                .addClass('cityBtn')
                .addClass('firstChart')
                .addClass('cityBtn' + i)
                .attr("id", "city0" + i);;

            var queryURL9 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrAPIKey + '&text=' + cities[i].city + '&sort=relevance&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1';

            $.ajax({
                url: queryURL3,
                method: "GET"
            }).done(function(response) {

                    for (var i = 0; i < cities.length; i++) {
                        if ($("#city0" + i).hasClass("cityBtn" + i)) {
                            var splitName = cities[i].city;

                            if (splitName === response.name) {
                                $("#city0" + i).html(cities[i].fullName);
                                $("#city0" + i).append('<br><br>' + response.main.temp + ' F°');
                                $("#city0" + i).attr('data-lat', response.coord.lat);
                                $("#city0" + i).attr('data-lon', response.coord.lon);

                                citylat = $("#city0" + i).data("lat");
                                citylong = $("#city0" + i).data("lon");

                            }

                        }

                    }
                });

                $.getJSON(queryURL9, function(response) {

                    for (var i = 0; i < cities.length; i++) {
                        if ($("#city0" + i).hasClass("cityBtn" + i)) {
                            var splitName1 = cities[i].title;
                            if (splitName1 == response.photos.photo[0].title) {
                                $('#city0' + i).css('background-image', 'url(' + "https://farm" + response.photos.photo[0].farm + ".staticflickr.com/" + response.photos.photo[0].server + "/" + response.photos.photo[0].id + "_" + response.photos.photo[0].secret + "_n.jpg" +')');
                                $('#city0' + i).css('background-size', 'auto 100%');
                            }
                        }
                    }
                });

                $("#first").append(citybutton);
                $('#firstAttribute').html(attributesChosen[0]);
        }
    }
}

function showCity1List() {
    for (var i = 0; i < cities.length; i++) {

        if (cities[i][attributesChosen[1]][0] >= 3) {

            var queryURL4 = "https://cors-bcs.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?" +
                "q=" + cities[i].city + "&units=imperial&appid=" + APIKeyWeather;

            citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                .attr("data-full", cities[i].fullName)
                .attr("data-name", cities[i].city)
                .text(cities[i].fullName)
                .addClass('cityBtn')
                .addClass('secondChart')
                .addClass('cityBtn' + i)
                .attr("id", "city1" + i);
            

            var queryURL10 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrAPIKey + '&text=' + cities[i].city + '&sort=relevance&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1';
            $.ajax({
                url: queryURL4,
                method: "GET"
            })

            .done(function(response) {

                for (var i = 0; i < cities.length; i++) {
                    if ($("#city1" + i).hasClass("cityBtn" + i)) {
                        var splitName = cities[i].city;

                        if (splitName === response.name) {
                            $("#city1" + i).html(cities[i].fullName);
                            $("#city1" + i).append('<br><br>' + response.main.temp + ' F°');
                            $("#city1" + i).attr('data-lat', response.coord.lat);
                            $("#city1" + i).attr('data-lon', response.coord.lon);

                            citylat = $("#city1" + i).data("lat");
                            citylong = $("#city1" + i).data("lon");
                        }

                    }

                }
            })
            $.getJSON(queryURL10, function(response) {
                  
                    for (var i = 0; i < cities.length; i++) {
                        if ($("#city1" + i).hasClass("cityBtn" + i)) {
                            var splitName1 = cities[i].title;
                            if (splitName1 == response.photos.photo[0].title) {
                                $('#city1' + i).css('background-image', 'url(' + "https://farm" + response.photos.photo[0].farm + ".staticflickr.com/" + response.photos.photo[0].server + "/" + response.photos.photo[0].id + "_" + response.photos.photo[0].secret + "_n.jpg" +')');
                                $('#city1' + i).css('background-size', 'auto 100%');
                            }
                        }
                    }
                });

            $("#second").append(citybutton);

            $('#secondAttribute').html([attributesChosen[1]]);
        }
    }
}

function showCity2List() {
    for (var i = 0; i < cities.length; i++) {
        if (cities[i][attributesChosen[2]][0] >= 3) {

            var queryURL5 = "https://cors-bcs.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?" +
                "q=" + cities[i].city + "&units=imperial&appid=" + APIKeyWeather;

            citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                .attr("data-full", cities[i].fullName)
                .attr("data-name", cities[i].city)
                .text(cities[i].fullName)
                .addClass('cityBtn')
                .addClass('thirdChart')
                .addClass('cityBtn' + i)
                .attr("id", "city2" + i);

            var queryURL11 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrAPIKey + '&text=' + cities[i].city + '&sort=relevance&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1';
            $.ajax({
                url: queryURL5,
                method: "GET"
            })

            .done(function(response) {

                for (var i = 0; i < cities.length; i++) {
                    if ($("#city2" + i).hasClass("cityBtn" + i)) {
                        var splitName = cities[i].city;

                        if (splitName === response.name) {
                            $("#city2" + i).html(cities[i].fullName);
                            $("#city2" + i).append('<br><br>' + response.main.temp + ' F°');
                            $("#city2" + i).attr('data-lat', response.coord.lat);
                            $("#city2" + i).attr('data-lon', response.coord.lon);

                            citylat = $("#city2" + i).data("lat");
                            citylong = $("#city2" + i).data("lon");

                        }

                    }

                }
            })

            $.getJSON(queryURL11, function(response) {
                   
                    for (var i = 0; i < cities.length; i++) {
                        if ($("#city2" + i).hasClass("cityBtn" + i)) {
                            var splitName1 = cities[i].title;
                            if (splitName1 == response.photos.photo[0].title) {
                                $('#city2' + i).css('background-image', 'url(' + "https://farm" + response.photos.photo[0].farm + ".staticflickr.com/" + response.photos.photo[0].server + "/" + response.photos.photo[0].id + "_" + response.photos.photo[0].secret + "_n.jpg" +')');
                                $('#city2' + i).css('background-size', 'auto 100%');
                            }
                        }
                    }
                });

            $("#third").append(citybutton);

            $('#thirdAttribute').html([attributesChosen[2]]);

        }
    }
}


//
//end of functions to showcity lists
//