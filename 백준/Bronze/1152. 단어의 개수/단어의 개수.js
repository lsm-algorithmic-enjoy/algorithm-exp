const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const strArr = input.split(' ');

console.log(strArr[0] === '' ? 0 : strArr.length);