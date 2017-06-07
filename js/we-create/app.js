// **** SAM Y MARIO **** //
var userName;
var categories = ['Housing', 'Cost of Living', 'Education', 'Public Safety', "Outdoors Accessibility", "Culture and Leisure", "Taxation", 'Economy', 'Environment Quality'];

var attributesChosen = [];
var numberOfClicks = 0;

window.onload = function () {

    // SUBMIT BTN on click hidde:
    $('#userNameSubmit').on('click', function (event) {
        event.preventDefault();
        userName = $('#userNameInput').val().trim();
        $('#initialPrompt').hide();
        fireQuestionnaire();
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

    // GRAB 3 BTN OPTIONS store in var attributesChosen[]:
    $('#questionnaire').on ('click','.attributes', function(){

        var dataName = $(this).data('category');
        console.log(dataName);
        attributesChosen.push(dataName);
        numberOfClicks++;
        $(this).hide();
        if (numberOfClicks === 3) {
            $('.questions').hide();
            // showCharts();
        }
        console.log(attributesChosen);
    });
};

// *****   SAM Y MARIO ****  ////