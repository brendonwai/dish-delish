var serviceAccount = require("./dishdelish-f559d-firebase-adminsdk-0r6d5-0420999143.json");
var admin = require("firebase-admin");

//Firebase
module.exports = function(){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dishdelish-f559d.firebaseio.com",
    databaseAuthVariableOverride:{
      uid: "authenticated-server"
    }
  });

  var db = admin.database();
  var ref = db.ref("/cities");

  this.updateEntry = function(city, latitude, longitude , topFood){
    console.log(city,topFood);
    switch (topFood.length){
      case 1:
        ref.child(city).update({
          food_one:topFood[0].name,
          lat:latitude,
          lng: longitude
        });
        break;
      case 2:
        ref.child(city).update({
          food_one:topFood[0].name,
          food_two:topFood[1].name,
          lat:latitude,
          lng: longitude
        });
        break;
      case 3:
        ref.child(city).update({
          food1:topFood[0].name,
          food2:topFood[1].name,
          food3:topFood[2].name,
          lat:latitude,
          lng: longitude
        });
        break;
    }
  }

  this.removeEntry = function(city){
    ref.child(city).remove();
  }

  return this;
}
