var Twitter = require("twitter");

module.exports = function(){
  var client = new Twitter({
    consumer_key: 'YS0ozR5l4hMjraZfyYXJlbta0',
    consumer_secret: 'iDjpy6Hz5qaRdrJtVkvG2OfRDlsapZw2FpDEBJi6eOgjZClXmR',
    access_token_key: '841140793494581248-gFz1TsVWDKi5kr9s3uG4cCa3vAUaBCY',
    access_token_secret: 'i0O9cCWp2xyPH9vnyidGalv7cdbTuXXIJJD64VlM3EWFd'
  });

  this.getTweet = function(q_param, amount, geo_string, callback){
    client.get('search/tweets', {screen_name: 'nodejs', q:q_param, count:amount, geocode: geo_string}, function(error, tweets, response){
      if (!error){
        //console.log(tweets);
        return callback(tweets);
      }else{
        return callback(null);
      }
    })
  }
  return this;
}
