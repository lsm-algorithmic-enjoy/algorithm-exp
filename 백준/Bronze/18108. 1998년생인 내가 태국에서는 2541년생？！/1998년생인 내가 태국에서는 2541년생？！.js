const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();

const year = parseInt(inputData) - 543;

console.log(year);