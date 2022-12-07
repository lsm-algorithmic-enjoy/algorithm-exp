const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const iter = inputData[0];
let result = "";

for(let i = 1; i <= iter; i++){
    let data = inputData[i].split(' ').map(Number);
    result += data[0] + data[1] + '\n';
}

console.log(result);