var http = require("http");
var admin = require("firebase-admin");
var Twitter = require("twitter");
var serviceAccount = require("./dishdelish-f559d-firebase-adminsdk-0r6d5-0420999143.json");

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

//twitter here
var client = new Twitter({
  consumer_key: 'YS0ozR5l4hMjraZfyYXJlbta0',
  consumer_secret: 'iDjpy6Hz5qaRdrJtVkvG2OfRDlsapZw2FpDEBJi6eOgjZClXmR',
  access_token_key: '841140793494581248-gFz1TsVWDKi5kr9s3uG4cCa3vAUaBCY',
  access_token_secret: 'i0O9cCWp2xyPH9vnyidGalv7cdbTuXXIJJD64VlM3EWFd'
});
var params = {screen_name: 'nodejs'};
client.get('search/tweets', {q:'dick'}, function(error, tweets, response){
  if (!error){
    console.log(tweets);
  }
})

//addNewEntry("San francisco", "chicken");
//removeEntry("San francisco");
server.listen(8080);

function updateEntry(city, new_food){
  ref.child(city).update({
    food:new_food
  });
}

function removeEntry(city){
  ref.child(city).remove();
}
