var http = require("http");
var asyn = require("async");
var database = require("./database")();
var twitter = require("./getTwitter")();
var geocode = require("./geocode")();
var foodbase = require("./food.js")();
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
var hashtags = [];

//cities dictionary
//lets work with 5 cities for now
var cities = [
  {
    name: "San Francisco, CA",
    coord: "37.773964, -122.419063",
    foods: []
  },
  {
    name: "Seattle, WA",
    coord: "47.605041, -122.331795",
    foods: []
  },
  {
    name: "New York, NY",
    coord: "40.714680, -74.006881",
    foods: []
  },
  {
    name: "Washington, DC",
    coord: "38.909418, -77.038609",
    foods: []
  },
  {
    name: "Austin, TX",
    coord: "30.267144, -97.743832",
    foods: []
  }
];
var searchCount = 0;
var operation_done = true;

asyn.forever(
  function(next){
    geocode.searchGeocode(cities[searchCount%5].name, geoCallback, searchCount%5);
    searchCount++;
    setTimeout(next, 10000);
  },
  function(err){
    console.log(err);
  }
);

//keep updating each city
//while (true){
  // if (operation_done){
  //   console.log(cities[searchCount%5].name);
  //   operation_done = false;
  //   geocode.searchGeocode(cities[searchCount%5].name, geoCallback, searchCount%5);
  //   //geo_string = cities[searchCount%5].coord + ",50mi";
  //   //twitter.getTweet("%23food", 100, geo_string, extractHashtags, searchCount%5);
  //   searchCount++;
  // }
//}

function geoCallback(geocode, city_index){
  if (geocode !== null){
    var lat = geocode[0];
    var lng = geocode[1];
    var geo_string = lat + "," + lng + ",50mi";
    console.log(geo_string);
    twitter.getTweet("%23food", 100, geo_string, extractHashtags, city_index);
  }
}

function extractHashtags(jsonResponse, city_index){
  statuses = jsonResponse.statuses;
  for (tweet in statuses){
    thisTweet = statuses[tweet];
    for (hashtag in thisTweet.entities.hashtags){
      tagString = thisTweet.entities.hashtags[hashtag].text.toLowerCase();
      if (tagString !== "food" && tagString !== "foodporn"){
        hashtags.push(tagString);
      }
    }
  }
  console.log(hashtags);
  searchFoodDatabase(city_index);
}

function searchFoodDatabase(city_index){
  foodList = cities[city_index].foods;
  while(hashtags.length > 0){
    hashtag = hashtags.shift();
    var foodString = null;
    foodString = foodbase.searchForFood(hashtag);
    if (foodString !== null){
      added = false;
      for (food in foodList){
        if (foodString === foodList[food].name){
          foodList[food].count += 1;
          added = true;
        }
      }
      if (!added){
        foodList.push({
          name: foodString,
          count: 1
        });
      }
    }
  }
  if (foodList.length > 0){
    foodList.sort(function(a,b){
      return b.count - a.count;
    });
    topFood = [];
    for (i = 0; i < foodList.length; i++){
      if (i >= 3){
        break;
      }
      topFood.push(foodList[i]);
    }
    database.removeEntry(cities[city_index].name);
    database.updateEntry(cities[city_index].name, topFood);
    operation_done = true;
  }
}
