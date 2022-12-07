const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const asciiNum = input.charCodeAt(0);
console.log(asciiNum);

