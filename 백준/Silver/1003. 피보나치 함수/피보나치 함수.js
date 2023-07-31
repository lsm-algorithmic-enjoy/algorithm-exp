let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

for(let i = 2; i <= 40; i++){
    d[i] = d[i-1] + d[i-2];
}

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++){
    let n = Number(input[t]);
    if(n === 0) console.log(1, 0);
    else console.log(d[n-1], d[n]);
}