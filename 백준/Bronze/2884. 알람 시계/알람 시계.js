const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let hour = Number(inputData[0]);
let min = Number(inputData[1]);

if(min < 45){
    hour -= 1;
    min = 60 - (45 - min);
} else{
    min -= 45;
}

if(hour < 0) hour = 23;

console.log(hour, min);