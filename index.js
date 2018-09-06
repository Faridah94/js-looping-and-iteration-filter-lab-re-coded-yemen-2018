// Code your solution in this file
function findMatching(array,arg){
  let matching = [];
  
  for (const name of array){
    if (name.toUpperCase() === arg.toUpperCase()){
      
      matching.push(name);
    }
    
  }
  return matching;
  
}
 function fuzzyMatch(array, arg){
  let matching = [];
  let num = arg.length;
  
  for (const name of array){
    
    if (name.slice(0,num) === arg){
      matching.push(name);
    }
  }
  return matching;
}
 function matchName(array, arg){
  let matching = [];
  
    for (const key of array){
      
      if (key["name"] === arg){
        matching.push(user);
      }
      
      
    }
  return matching;
}
