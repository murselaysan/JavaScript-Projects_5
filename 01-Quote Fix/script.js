//Transform an array of strings into a secret message!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";
console.log(quote);
const favouriteQuote = quote.split(' ');
console.log(favouriteQuote);


//console.log(favouriteQuote.length);
favouriteQuote.pop(); //remove string Javascript
//console.log(favouriteQuote);
//console.log(favouriteQuote.length);

favouriteQuote.push('Development,','ThoughtWorks','Inc.') //add two elements 

favouriteQuote[1] = 'fool'; //replace 7th element, easily
//console.log(favouriteQuote);

favouriteQuote.shift(); //remove first string of the array
//console.log(favouriteQuote);

favouriteQuote.unshift('Any'); //add first string
//console.log(favouriteQuote);

favouriteQuote.splice(7, 5,'computer'); //remove strings from get to time and replace with single string know
//console.log(favouriteQuote);

console.log(favouriteQuote.join(' ')); //print as a sentence

