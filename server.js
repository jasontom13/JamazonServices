var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');
var firebase = require("firebase");

var ebayID = ''
var walmartKey = ''
var eBayUrl = `https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=${ebayID}&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0&keywords=`;
var walmartUrl = `http://api.walmartlabs.com/v1/search?apiKey=${walmartKey}&query=`;

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

app.get('/Ebay/search/:query', function(req, res) {
  request(eBayUrl + req.params.query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(body);
    }
  })

});

app.get('/Walmart/search/:query', function(req, res) {
  request(walmartUrl + req.params.query, function(error, response, body) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(body);
  });
})

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(process.env.PORT || 5000);
