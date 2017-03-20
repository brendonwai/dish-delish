var http = require("http");
var database = require("./database")();
var twitter = require("./getTwitter")();
var geocode = require("./geocode")();
 //Sample firebase functions
//database.updateEntry("Seattle", "factory");
//database.removeEntry("Los Angeles");


/* Sample twitter function
twitter.getTweet("%23food", 2);
*/

/* Sample google maps function
geocode.searchGeocode("Irvine, CA");
*/


/* basic server functionality
var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end('Dish Delish');
});

server.listen(8080);
*/
geocode.searchGeocode("Los Angeles", geoCallback);

function geoCallback(geocode){
  if (geocode !== null){
    var lat = geocode[0];
    var lng = geocode[1];
    console.log(lat,lng);
    var geo_string = lat + "," + lng + ",50mi";
    twitter.getTweet("%23food", 5, geo_string, twitterCallback);
  }
}

function twitterCallback(response){
  console.log(response);
}
