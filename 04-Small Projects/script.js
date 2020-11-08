
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  function express (arr){
    for(i=0; i<arr.length ; i++){
        arr[i]= [arr[i], arr[i].substring(0,3) ,arr[i].length]
    }
    return arr;
  }

  console.log(express(countries));


  
// Add "-" after every even number

const numbers = "315469781318158";

function lastArray (data) {
    let arr = data.toString().split('');
    // let evenNum = arr.filter(number => number%2 === 0);
    // console.log(evenNum);
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] % 2 === 0 ){
            arr[i] = Number(arr[i])+"-"
        }
    }
    return arr.join("");
  }
  console.log(lastArray(numbers));

/*
  function evenNumbers(num) {
    if(typeof num === 'number') {
      let str = num.toString();
      let a = "";
      for(var i=0; i< str.length; i++) {
        if(parseInt(str[i]) % 2 == 0  && i !== str.length - 1) {
          a = a + str[i] + "-";
        } else {
          a += str[i];
        }
      }
      return a;
    } else {
      return "It is not a number";
    }
  }
  console.log(evenNumbers(numbers));
  */

// Add "-" after every number *** alternatve for the lastArray function

const numeric = [0,1,2,3,4,5,6,7,8,9];
const alpha  = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

function criptoMaker (num){
  let cripto = [];
  let alphaNumeric = numeric.concat(alpha.split(" ")); 
  for (i=0; i<num; i++){
    random = Math.floor(Math.random()*alphaNumeric.length);
    cripto.push(alphaNumeric[random]);
  }
  return cripto.join("");
}
console.log(criptoMaker(16));

function criptoArray (data) {
    let arr = data.toString().split('');
    // let evenNum = arr.filter(number => number%2 === 0);
    console.log(arr);
    numeric.forEach(element => {
    for(i=0; i<arr.length-1; i++){
        if(arr[i] === element.toString() && arr[i] % 1 === 0 ){
          arr[i] = Number(arr[i])+"-"
        }  
      }
    });  
    return arr.join("");
  }
  console.log(criptoArray(criptoMaker(16)));
  