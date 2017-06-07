
var userName;

var categories = ['Housing', 'Cost of Living', 'Education', 'Public Safety', "Outdoors Accessibility", "Culture and Leisure", "Taxation", 'Economy', 'Environment Quality'];


window.onload =  function () {



    $('#userNameSubmit').on('click', function (event) {
        event.preventDefault();
        userName = $('#userNameInput').val().trim();
        $('#initialPrompt').hide();
        fireQuestionnaire();

    });

    function fireQuestionnaire() {
        var question = 'Choose three attributes most important in a city to you:';
        $('#questionDiv').html(question);
        for (i = 0; i < categories.length; i++) {
            var categoryButton = $('<button>');
            categoryButton.addClass('attributes');
            categoryButton.attr('data-category', categories[i]);
            categoryButton.text(categories[i]);
            $('#questionnaire').append(categoryButton);

        }
    }
};