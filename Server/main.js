var http = require("http");
var admin = require("firebase-admin");
var Twitter = require("twitter");
var googleMapsClient = require("@google/maps").createClient({
  key: 'AIzaSyDxFywCHwEpczLz3I2YAaMlnyI0Iatbw2s'
});
var serviceAccount = require("./dishdelish-f559d-firebase-adminsdk-0r6d5-0420999143.json");
//google maps
googleMapsClient.geocode({
  address: '92612'
}, function(err, response){
  if(!err){
    var location = response.json.results[0].geometry.location;
    console.log(location.lat,location.lng);
  }
  if(err){
    console.log(err);
  }
});

//Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dishdelish-f559d.firebaseio.com",
  databaseAuthVariableOverride:{
    uid: "authenticated-server"
  }
});

var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end('Dish Delish');
});

var db = admin.database();
var ref = db.ref("/cities");

function updateEntry(city, new_food){
  ref.child(city).update({
    food:new_food
  });
}

function removeEntry(city){
  ref.child(city).remove();
}

//twitter
var client = new Twitter({
  consumer_key: 'YS0ozR5l4hMjraZfyYXJlbta0',
  consumer_secret: 'iDjpy6Hz5qaRdrJtVkvG2OfRDlsapZw2FpDEBJi6eOgjZClXmR',
  access_token_key: '841140793494581248-gFz1TsVWDKi5kr9s3uG4cCa3vAUaBCY',
  access_token_secret: 'i0O9cCWp2xyPH9vnyidGalv7cdbTuXXIJJD64VlM3EWFd'
});
var params = {screen_name: 'nodejs'};
client.get('search/tweets', {q:'%23food',count:2}, function(error, tweets, response){
  if (!error){
    console.log(tweets);
  }
})

server.listen(8080);
