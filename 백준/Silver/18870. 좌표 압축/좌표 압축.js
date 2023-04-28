let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a,b) => a - b);

let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++){
    myMap.set(uniqueArray[i], i);
}

let answer = "";
for(x of arr) answer += myMap.get(x) + " ";
console.log(answer);
