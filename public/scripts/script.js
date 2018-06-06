$(function() {
    $('button').click(function() {
        var userInput = $('input').val();
        if (userInput) {
            var api_url = '/search';
            var config = {
              params: {
                city: userInput
              }
            };
            axios.get(api_url, config)
            .then(function(response) {
                $('#APIresults').text(JSON.stringify(response));
            });
        }
    });
})