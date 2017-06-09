$(document).ready(function(){

        $('.modal').modal();

    //
    // calling google.maps API
    //    
    function initMap() {

        //giving lat and long to city
        var city = {lat: -34.397, lng: 150.644};
        
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
    initMap();

   

    // 
    // when div is clicked, shows city name
    // 
	$(".charts").on('click', ".cityBtn", function () {
        console.log('click')
        var fullname = $(this).data('full');
        console.log(fullname)
        var lat = $(this).data('lat');
        console.log(lat)
        $('.cityName').append('<h4>' + fullname + '</h4>');

	});

});  
