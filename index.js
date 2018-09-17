//the beatles play
function theBeatlesPlay(musicians, instruments) {
  
  var array = [];
  
    for (let i = 0; i < musicians.length; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    
    return array;
}
function johnLennonFacts(array){
  const facts = [];
        while (array.length > 0){
          facts.push(array + "!!!");
          facts++;
          
        return facts;
        }
}

function johnLennonFacts (facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
    }
  return array;
}