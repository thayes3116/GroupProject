$(document).ready(function(){
       
        

    //
    // calling google.maps API
    //    
    function initMap(hello) {

        //giving lat and long to city
        var city = {lat: 43.61, lng: -116.2};
        // console.log(lat);
       
        
        //grabbing variable map and giving it API to call   
        map = new google.maps.Map(document.getElementById('map'), {

                //centers the city in the map
                center: city,
                
                zoom: 10,
                
                //disables user from functioning map
                disableDefaultUI: true
            });

        // the red marker on map
        var marker = new google.maps.Marker({
            position: city,
            map: map,
        });
    }

    // Shows google map in modal
    //var card = $('<div id="map">');
    $('#map').append(map);
   

   

    // 
    // when div is clicked, shows city name
    // 
	$(".charts").on('click', ".cityBtn", function () {
        
        var nameCity = $(this).data('name');
        
        var fullname = $(this).data('full');
        
        console.log(fullname)
        
        var lat = $(this).data('lat');

        var long = $(this).data('lon');
        
        console.log(lat);

        console.log(long);

        $("#mainBox1").css("display", "block")

        $("#mainBox2").hide();

         initMap();
        
        $('.cityName').html('<h4 id ="h4city">' + fullname + '</h4>');

        for (i = 0; i < cities.length; i++) {
            if (nameCity === cities[i].city) {
                console.log(nameCity);
                showGraph(i);
            }
        }

	});

});  
