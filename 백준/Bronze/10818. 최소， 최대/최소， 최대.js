const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const iter = Number(inputData[0]);
let arr = inputData[1].split(' ').map(Number);

arr.sort((a,b) => a-b);

console.log(`${arr[0]} ${arr[iter-1]}`);

