

function theBeatlesPlay(musicians, instruments) {
  
  var array = [];
  
    for (let i = 0; musicians.length && instruments.length; i++){
      array.push(`${musicians} plays ${instruments}`);
    }
    
    return array;
}

/*
for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}
*/