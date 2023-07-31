let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]);

d = new Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;

for(let i = 3; i <= n; i++) {
    d[i] = (d[i-1] + d[i-2]) % 15746;
} 
console.log(d[n]);