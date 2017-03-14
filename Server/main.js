var http = require("http");
var database = require("./database")();
var twitter = require("./getTwitter")();
var geocode = require("./geocode")();
/* Sample firebase functions
database.updateEntry("Los Angeles", "Tacos");
database.removeEntry("Los Angeles");
*/

/* Sample twitter function
twitter.getTweet("%23food", 2);
*/

/* Sample google maps function
geocode.searchGeocode("Irvine, CA");
/*

/* basic server functionality
var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end('Dish Delish');
});

server.listen(8080);
*/
