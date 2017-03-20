var fs = require('fs');

module.exports = function(){
  foodbase = fs.readFileSync('FOOD.txt').toString().split("\n");
  dictionary_index = [
    {
      index: 'a',
      position: 5
    },
    {
      index: 'b',
      position: 1126
    },
    {
      index: 'c',
      position: 2726
    },
    {
      index: 'd',
      positino: 5634
    },
    {
      index: 'e',
      position: 6342
    },
    {
      index: 'f',
      position: 6828
    },
    {
      index: 'g',
      position: 7638
    },
    {
      index: 'h',
      position: 8485
    },
    {
      index: 'i',
      position: 9210
    },
    {
      index: 'j',
      position: 9512
    },
    {
      index: 'k',
      position: 9826
    },
    {
      index: 'l',
      position: 10748
    },
    {
      index: 'm',
      position: 11596
    },
    {
      index: 'n',
      position: 13137
    },
    {
      index: 'o',
      position: 13593
    },
    {
      index: 'p',
      position: 14048
    },
    {
      index: 'q',
      position: 16029
    },
    {
      index: 'r',
      position: 16182
    },
    {
      index: 's',
      position: 16972
    },
    {
      index: 't',
      position: 19312
    },
    {
      index: 'u',
      position: 20459
    },
    {
      index: 'v',
      position: 20583
    },
    {
      index: 'w',
      position: 20886
    },
    {
      index: 'x',
      position: 21250
    },
    {
      index: 'y',
      position: 21287
    },
    {
      index: 'z',
      position: 21444
    }
  ];
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
