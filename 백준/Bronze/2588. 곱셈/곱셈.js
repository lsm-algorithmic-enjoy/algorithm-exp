const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);

const three = A*(B%10);
const four = A*(Math.floor((B%100)/10));
const five = A*(Math.floor(B/100));
const six = A*B;

console.log(three);
console.log(four);
console.log(five);
console.log(six);