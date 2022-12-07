const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);

const A = inputData[0];
const B = inputData[1];
const C = inputData[2];

console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);