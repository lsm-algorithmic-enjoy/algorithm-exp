const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let asciiArr = []

for(let i = 97; i <= 122; i++){
    asciiArr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(asciiArr.join(' '));