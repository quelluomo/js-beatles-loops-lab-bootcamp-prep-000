//the beatles play
function theBeatlesPlay(musicians, instruments) {
  
  var array = [];
  
    for (let i = 0; i < musicians.length; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    
    return array;
}
function johnLennonFacts(array){
  const facts = []
  var i = 0
        while (i < array.length){
          facts.push(array[i] + '!!!');
          i++;
          return facts;
        }
}