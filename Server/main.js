var http = require("http");
var admin = require("firebase-admin");
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
