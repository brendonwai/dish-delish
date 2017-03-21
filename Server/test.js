var fs = require('fs');

foodbase = fs.readFileSync('FOOD.txt').toString().split("\n");

console.log(foodbase[5].replace(/ /g,'').toLowerCase());
console.log('abalone' == foodbase[5].replace(/ /g,'').toLowerCase());
