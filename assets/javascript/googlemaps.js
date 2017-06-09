// **** SAM Y MARIO **** //
var userName;
var categories = ['Housing', 'Cost of Living', 'Education', 'Public Safety', "Outdoors Accessibility", "Culture and Leisure", "Taxation", 'Economy', 'Environment Quality'];

var attributesChosen = [];
var numberOfClicks = 0;
var map;
var map2;
var map3;

window.onload = function () {


    // SUBMIT BTN on click hidde:
    $('#userNameSubmit').on('click', function (event) {
        event.preventDefault();
        userName = $('#userNameInput').val().trim();
        $('#initialPrompt').hide();
        5
        fireQuestionnaire();
        console.log(userName);
    });

    // BTN OPTIONS PICK 3
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

    // GOOGLE MAPS 1
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 28.586338, lng: -81.196061},
            zoom: 10
        });
    }
    // GOOGLE MAPS 2
    function initMap2() {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 28.586338, lng: -81.196061},
            zoom: 10
        });
    }
    // GOOGLE MAPS 3
    function initMap3() {
        map2 = new google.maps.Map(document.getElementById('map3'), {
            center: {lat: 28.586338, lng: -81.196061},
            zoom: 10
        });
    }

    // GRAB 3 BTN OPTIONS store in var attributesChosen[]:
    $('#questionnaire').on('click', '.attributes', function () {
        var dataName = $(this).data('category');
        console.log(dataName);
        attributesChosen.push(dataName);
        numberOfClicks++;
        $(this).hide();
        if (numberOfClicks === 3) {
            $('.questions').hide();

            // SHOW MAPS 1
            var card = $('<div id="map">');
            var link = $('<div class="card-content"><a class="modal-trigger waves-effect waves-light btn" href="#modal1">ORLANDO</a></span>');
            var modal = $('<div id="modal1" class="modal modal-fixed-footer"><div class="modal-content"><h4>ORLANDO CITY</h4><p>City Info Table</p></div><div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Back</a>');

            $('.map').html(card);
            $('#map').append(map);
            $('.link').append(link);
            $('.link').append(modal);
            $('#modal1').modal();

            initMap();

            // SHOW MAPS 2
            var card2 = $('<div id="map2">');
            var link2 = $('<div class="card-content2"><a class="modal-trigger waves-effect waves-light btn" href="#modal2">ANOTHER</a></span>');
            var modal2 = $('<div id="modal2" class="modal modal-fixed-footer"><div class="modal-content"><h4>ANOTHER CITY</h4><p>City Info Table</p></div><div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Back</a>');

            $('.map2').html(card2);
            $('#map2').append(map2);
            $('.link2').append(link2);
            $('.link2').append(modal2);
            $('#modal1').modal()

            initMap2();

            // SHOW MAPS 3
            var card3 = $('<div id="map3">');
            var link3 = $('<div class="card-content3"><a href="#">OTRO MAS</a></span>');

            $('.map3').html(card3);
            $('#map3').append(map3);
            $('.link3').append(link3);

            initMap3();
        }
    });
};

// *****   SAM Y MARIO ****  ////


// WHAT I NEED !!!!

var map;

// API GOOGLE MAPS
function initMap() {
    var city = {lat: -34.397, lng: 150.644},
        map = new google.maps.Map(document.getElementById('map'), {
            center: city,
            zoom: 10,
            disableDefaultUI: true
        });
    var marker = new google.maps.Marker({
        position: city,
        map: map,
        title: 'Hello World!'
    });
}

// SHOW Google Maps
var card = $('<div id="map">');
$('#map').append(map);
initMap();

$(document).ready(function(){
    $('.modal').modal();
});


$('#btn').on('click', function () {
    var name = $(this).attr('data-name');

    $('#cityNme').append('<h4>' + name + '</h4>');

    console.log('hello')

});






