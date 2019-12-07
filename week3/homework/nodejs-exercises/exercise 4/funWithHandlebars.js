const handlebars = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];

const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

function getRandom (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const tempSour = "{{subject}} is a slippery slop that leads to {{punchline}}";

const templateFunc = handlebars.compile(tempSour);


const result = templateFunc({subject:getRandom(subjects), punchline: getRandom(punchlines)});

console.log(result);