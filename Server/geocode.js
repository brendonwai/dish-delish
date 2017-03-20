var googleMapsClient = require("@google/maps").createClient({
  key: 'AIzaSyDxFywCHwEpczLz3I2YAaMlnyI0Iatbw2s'
});

module.exports = function(){
  this.searchGeocode = function(s_address, callback){
    googleMapsClient.geocode({
      address: s_address
    }, function(err, response){
      if(!err){
        var location = response.json.results[0].geometry.location;
        //console.log(location.lat,location.lng);
        var geocode = [location.lat, location.lng];
        return callback(geocode);
      }
      if(err){
        console.log(err);
        return callback(null);
      }
    });
  }
  return this;
}
