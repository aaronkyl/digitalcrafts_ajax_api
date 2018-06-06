$(function() {
    $('button').click(function() {
        var userInput = $('input').val();
        if (userInput) {
            var api_url = 'http://api.openweathermap.org/data/2.5/weather';
            var config = {
              params: {
                q: userInput,
                APPID: 'API KEY HERE'
              }
            };
            axios.get(api_url, config)
            .then(function(response) {
                $('#APIresults').text(JSON.stringify(response.data));
            });
        }
    });
})