var fs = require('fs');

module.exports = function(){
  foodbase = fs.readFileSync('FOOD.txt').toString().split("\n");
  dictionary_index = [];
  currentCharCode = 0;
  for (i = 0; i < foodbase.length; i++){
    if (foodbase[i].length === 0){
      continue;
    }
    if (foodbase[i].charCodeAt(0) < 97 || foodbase[i].charCodeAt(0) > 122){
      //not alphabet
      continue;
    }else{
      if (currentCharCode !== foodbase[i].charCodeAt(0)){
        currentCharCode = foodbase[i].charCodeAt(0);
        dictionary_index.push({
          index: String.fromCharCode(currentCharCode),
          position: i
        });
      }
    }
  }
  this.searchForFood = function(foodtag){
    charAscii = foodtag.charCodeAt(0);
    if (charAscii >= 97 && charAscii <= 122){
      //is alphabet
      charAscii -= 97;
      if (foodtag.charAt(0) != 'z'){
        index1 = dictionary_index[charAscii].position;
        index2 = dictionary_index[charAscii+1].position;
        for (i = index1; i < index2; i++){
          if (foodtag == foodbase[i].replace(/ /g,'').toLowerCase()){
            return foodbase[i];
          }
        }
      }
      else{
        index = dictionary_index[charAscii].position;
        for (i = index; i < foodbase.length; i++){
          if (foodtag == foodbase[i].replace(/ /g,'').toLowerCase()){
            return foodbase[i];
          }
        }
      }
    }
    else{
      index2 = dictionary_index[0].position;
      for (i = 0; i < index2; i++){
        if (foodtag == foodbase[i].replace(/ /g,'').toLowerCase()){
          return foodbase[i];
        }
      }
    }
    return null;
  }
  return this;
}
