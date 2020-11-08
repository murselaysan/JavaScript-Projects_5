function fibonacciGen (num) {
 
  let output = [0,1];
  if (num === 1){
      output = [0];
      }
//   else if (num === 2){
//       output = output;
//       }
  else {
        for (let i = 2; i < num; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
            }
        }
    return output
}
number=20      
console.log(fibonacciGen(20)); 


function fibonacciFinder (num) {
    const goldenRatio = 1.618034;
    return  Math.round((Math.pow(goldenRatio, (num-1))-Math.pow((1-goldenRatio), (num-1)))/Math.sqrt(5));
}

console.log(fibonacciFinder(number)); 

