function dwarfRollCall(dwarves) {
var string = ''
 for (let i = ; i < dwarves.length; i++) {
   string +=`${i+1}. ${dwarves[i]} `

}
 return string;
}

function summonCaptainPlanet(planeteerCalls) {
  var emptyArray = [ ];
  
  for (let i = 0; i < planeteerCalls.length; i++) {
  
    emptyArray.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return emptyArray

}
  
  
function longPlaneteerCalls(words) {

  let i = 0
  if (words[i].length === 4) {
    return false
  } else{
    words[i].length !== 4
    return true
  }
}


function findTheCheese (foods) {
  var cheeseArray = ["cheddar", "gouda", "camembert"]
  
  for (let i = 0; i < foods.length; i++) {
    
    if (cheeseArray.includes(foods[i]) ) {
      return foods[i]
      }
  }
   return "no cheese!"
}
 
 function wordsWithB(words) {
   
  var bWords = [ ]
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith('b') === true){
      bWords.push(words[i])
    }
  }
  return bWords
 }
  
