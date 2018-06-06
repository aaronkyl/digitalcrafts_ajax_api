const express = require('express');
const nunjucks = require('nunjucks');
const axios = require('axios');
require('dotenv').load();

var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.use(express.static('public'));

app.get('/', function(req, resp) {
    resp.render('index.html', {});
});

app.get('/search', function(req, res) {
    var userInput = req.query.city;
    var api_url = 'http://api.openweathermap.org/data/2.5/weather';
    var config = {
        params: {
            q: userInput,
            APPID: process.env.APPID
        }
    };
    axios.get(api_url, config)
    .then(function(response) {
        res.json(response.data);
    });
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});