var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');

var ebayID = 'JasonTom-Jamazon-PRD-82466ad0e-648f6631';
var url = `http://open.api.ebay.com/shopping?callname=FindPopularItems&responseencoding=JSON&appid=${ebayID}&siteid=0&version=713&QueryKeywords=`;
var port = '3030';

app.get('/ebay/search/:query', function(req, res) {
  request(url + req.params.query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(body);
    }
  })

});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
