const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const iter = Number(input[0]);
const num = input[1].split('');
let sum = 0;

for(let i = 0; i < iter; i++){
    sum += Number(num[i]);
}

console.log(sum);