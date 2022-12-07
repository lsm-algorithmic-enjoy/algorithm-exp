const fs = require('fs');
const inputData =fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);

const A = inputData[0];
const B = inputData[1];

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);