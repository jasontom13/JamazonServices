var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');
var firebase = require("firebase");

var ebayID = 'JasonTom-Jamazon-PRD-82466ad0e-648f6631';
var walmartKey = '2a5cbmcqb4wn56wbfhfe37e5'
var eBayUrl = `https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=${ebayID}&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0&keywords=`;
var walmartUrl = `http://api.walmartlabs.com/v1/search?apiKey=${walmartKey}&query=`;

var config = {
    apiKey: "AIzaSyBUEK9ezt4FcUQo_hyWkCJ3D5IHEgEvMdo",
    authDomain: "jamazon-578c7.firebaseapp.com",
    databaseURL: "https://jamazon-578c7.firebaseio.com",
    projectId: "jamazon-578c7",
    storageBucket: "jamazon-578c7.appspot.com",
    messagingSenderId: "973631780135"
  };

app.get('/ebay/search/:query', function(req, res) {
  request(eBayUrl + req.params.query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(body);
    }
  })

});

app.get('/walmart/search/:query', function(req, res) {
  request(walmartUrl + req.params.query, function(error, response, body) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(body);
  });
})

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(process.env.PORT || 5000);
