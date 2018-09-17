function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return array;
}
// I had to look this one up 'cause I dind't really got it
function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
    }
  return array;
}
function ILoveTheBeatles(n) {
  var array = [];
  function incrementVariable(){
  n = n + 1;
  }
  do {array.pop("I love the Beatles!")
  }
   while (array.length < 15 && incrementVariable());
  
   return array;
}

/*
function doWhileLoop(array) {
var i = 0;
  function incrementVariable() {
  i = i + 1;
}
  
  do {array.pop();}
  while (array.length > 0 && incrementVariable());
  return array;
}
*/