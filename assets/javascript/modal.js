$(document).ready(function(){

    var long;
    var lat;

    //
    // calling google.maps API
    //    
    function initMap() {

        //giving lat and long to city
        var city = {lat: lat, lng: long};
        
        //grabbing variable map and giving it API to call   
        map = new google.maps.Map(document.getElementById('map'), {

                //centers the city in the map
                center: city,
                
                zoom: 12,
                
                //disables user from functioning map
                disableDefaultUI: true
            });

        // the red marker on map
        var marker = new google.maps.Marker({
            position: city,
            map: map
        });
    }
    //
    // Shows google map in modal
    //

    $('#map').append(map);

    //
    // back button at map page
    //

    $('.btn-floating').on('click', function () {

        $("#mainBox1").hide();

        $("#mainBox2").css("display", "block");
    });


    // 
    // when div is clicked, shows city name
    // 

	$(".charts").on('click', ".cityBtn", function () {
        
        citiesClicked++;

        var nameCity = $(this).data('name');
        
        var fullname = $(this).data('full');

        if((citiesSearched.indexOf(fullname)) === -1){
           
            citiesSearched.push(fullname)

            console.log(citiesSearched)
           
            var citiesSearchedString = JSON.stringify(citiesSearched);
            
            var citiesSearchedKey = "citiesSearchedKey" + userName;
        
            console.log(citiesSearchedKey);

            localStorage.setItem(citiesSearchedKey, citiesSearchedString);
        }   

            
           
        lat = $(this).data('lat');

        long = $(this).data('lon');

        $("#mainBox1").css("display", "block")

        $("#mainBox2").hide();

         initMap();

        $('.bubbleChart').empty();

        $('.cityName').html('<h4 id ="h4city">' + fullname + '</h4>');

            for (i = 0; i < cities.length; i++) {

                if (nameCity === cities[i].city) {
     
                    showGraph(i);
                }
            }
	});
});
