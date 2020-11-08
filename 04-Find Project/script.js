/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/
const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk"
]

//first Method
function filterLane(item) {
  if (item.indexOf('Lane') > -1 ) {
    return true;
  } 
  return false; 
}

function getLanes(arr) {
  return arr.filter(filterLane)
}

console.log(getLanes(streetNames));

//second Method
// function getLanes(arr) {
//   let result = arr.filter(element => element.indexOf('Lane') > -1);
//   return result;
// }
// console.log(getLanes(streetNames))


//third Method without function
console.log(streetNames.filter(element => element.indexOf('Lane') > -1))
