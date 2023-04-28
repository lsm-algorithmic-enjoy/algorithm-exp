let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

const arr = String(input[0]).split('').map(Number);
arr.sort((a,b) => b - a);

const answer = arr.join("");
console.log(answer);