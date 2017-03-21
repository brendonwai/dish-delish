var http = require("http");
var asyn = require("async");
var database = require("./database")();
var twitter = require("./getTwitter")();
var geocode = require("./geocode")();
var foodbase = require("./food.js")();

var hashtags = [];

//cities dictionary
//lets work with 5 cities for now
var cities = [
  {
    name: "San Francisco, CA",
    lat: 0.0,
    lng: 0.0,
    foods: []
  },
  {
    name: "Chicago, IL",
    lat: 0.0,
    lng: 0.0,
    foods: []
  },
  {
    name: "New York, NY",
    lat: 0.0,
    lng: 0.0,
    foods: []
  },
  {
    name: "Washington, DC",
    lat: 0.0,
    lng: 0.0,
    foods: []
  },
  {
    name: "Austin, TX",
    lat: 0.0,
    lng: 0.0,
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

function geoCallback(geocode, city_index){
  if (geocode !== null){
    var lat = geocode[0];
    var lng = geocode[1];
    cities[city_index].lat = lat;
    cities[city_index].lng = lng;
    var geo_string = lat + "," + lng + ",75mi";
    twitter.getTweet("%23food+delicious", 100, geo_string, extractHashtags, city_index);
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
    database.updateEntry(cities[city_index].name, cities[city_index].lat, cities[city_index].lng, topFood);
    operation_done = true;
  }
}
