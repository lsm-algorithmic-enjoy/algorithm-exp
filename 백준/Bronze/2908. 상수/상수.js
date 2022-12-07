const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let sangsoo = [];

for(let i = 0; i < input.length; i++){
    sangsoo.push(input[i].split('').reverse().join(''))
}

console.log(Math.max(...sangsoo));