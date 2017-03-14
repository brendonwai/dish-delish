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

  this.updateEntry = function(city, new_food){
    ref.child(city).update({
      food:new_food
    });
  }

  this.removeEntry = function(city){
    ref.child(city).remove();
  }

  return this;
}
