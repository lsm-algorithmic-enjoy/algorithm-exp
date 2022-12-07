const fs = require('fs');
const inputData = Number(fs.readFileSync('/dev/stdin').toString());

let num = inputData;

let sum;
let i = 0;

while(true){
    sum = Math.floor(num/10) + num%10;
    
    num= (num%10)*10 + sum%10;
    
    i++;
    
    if(inputData === num){
        break;
    }
    
}
console.log(i);