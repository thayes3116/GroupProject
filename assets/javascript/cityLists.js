//
        //Beginning show city loops
        //
        function showCity0List() {
            for (var i = 0; i < cities.length; i++) {

                if (cities[i][attributesChosen[0]][0] >= 3) {
                   
                    var queryURL3 = "http://api.openweathermap.org/data/2.5/weather?" +
                        "q=" + cities[i].city + "&units=imperial&appid=" + APIKey;
                        console.log(cities[i].city)
                    citybutton = $('<a class="modal-trigger waves-effect waves-light btn cityBtn" href="#modal1">')
                        .attr("data-full", cities[i].fullName)
                        .attr("data-name", cities[i].city)
                        .text(cities[i].fullName)
                        .addClass('cityBtn')
                        .addClass('firstChart');

                    $.ajax({
                        url: queryURL3,
                        method: "GET"
                    }).done(function(response) {

                        console.log(response.coord.lat);
                        console.log(response.coord.lon);
                        console.log("Temperature (F): " + response.main.temp);
                        $('.firstChart').attr('data-lat', response.coord.lat)
                        $('.firstChart').attr('data-lon', response.coord.lon)
                        $('.firstChart').attr('data-lon', response.coord.temp)
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
                        .addClass('secondChart');

                    $.ajax({
                        url: queryURL4,
                        method: "GET"
                    })

                    .done(function(response) {

                        console.log(response.coord.lat);
                        console.log(response.coord.lon);
                        console.log("Temperature (F): " + response.main.temp);

                        $('.secondChart').attr('data-lat', response.coord.lat)
                        $('.secondChart').attr('data-lon', response.coord.lon)
                        $('.secondChart').attr('data-lon', response.coord.temp)
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
                        .addClass('thirdChart');

                    $.ajax({
                        url: queryURL5,
                        method: "GET"
                    })

                    .done(function(response) {
                    $.each()
                        console.log(data);

                        console.log(response.coord.lat);
                        console.log(response.coord.lon);
                        console.log("Temperature (F): " + response.main.temp);

                        $('.thirdChart').attr('data-lat', response.coord.lat)
                        $('.thirdChart').attr('data-lon', response.coord.lon)
                        $('.thirdChart').attr('data-lon', response.coord.temp)
                    })

                    $("#third").append(citybutton);
                    
                    $('#thirdAttribute').html([attributesChosen[2]]);
                    
                }
            }
        }

        //
        //end of functions to showcity lists
        //

        function flickrAPI(response) {
    
       for (var j = 0; j < cities.length; j++) {
            var cityFlickrSearch = cities[j].city;
            var flickrAPIKey = 'c7cff0c15cf991b259116b841af8142c';
            var queryURL9 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c58d15a58b51ccec41c7f192cda47279&text='+ cityFlickrSearch +'&sort=relevance&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1&auth_token=72157681984208042-0ff91e65e2009b83&api_sig=4a3141748851339842c5d0c544e7b7fe';



            $.ajax({
                    url: queryURL9,
                    method: 'GET'
                })
                .done(function(response) {
                    console.log(response);
                   /* $.each($('.cityBtn'),
                        function(index, value) {
                            for (j = 0; j < cities.length; j++) {
                            if (($(this)).data('name') === cities[j].fullName)
                            $('.cityBtn').append("<img src='" + "https://farm" + response.photos.photo[0].farm + ".staticflickr.com/" + response.photos.photo[0].server + "/" + response.photos.photo[0].id + "_" + response.photos.photo[0].secret + "_m.jpg" + "'>");

                           } //console.log(response);
                        })*/
                })
        }
    
};
flickrAPI();
