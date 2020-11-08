

const alpha  = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

const cripto = "Helloz";

// function criptoMaker (num){
//   let cripto = [];
//   let alphaNumeric = numeric.concat(alpha.split(" ")); 
//   for (i=0; i<num; i++){
//     random = Math.floor(Math.random()*alphaNumeric.length);
//     cripto.push(alphaNumeric[random]);
//   }
//   return cripto.join("");
// }
// console.log(criptoMaker(16));

function criptoArray (data, num) {
    let arr = data.toLowerCase().split('');
    let alphaArr = alpha.split(' ');
    let result = [];
    console.log(alphaArr);
    console.log(arr);
    for(i=0; i<arr.length; i++){
      for(j=0; j<alphaArr.length; j++){
        console.log(arr.length);
        if(arr[i] === alphaArr[j]){
          console.log(arr[i]);
          if(j+num > alphaArr.length){
            result.push(alphaArr[j+num-alphaArr.length])
          } else {
            result.push(alphaArr[j+num])
            }
          }  
        }
    }
      
    return result;
  }
  console.log(criptoArray(cripto, 5));
  