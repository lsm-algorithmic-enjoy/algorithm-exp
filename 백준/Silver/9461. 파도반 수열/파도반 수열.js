let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

d = new Array(101).fill(0);
d[1] = 1;
d[2] = 1;
d[3] = 1;

for(let i = 4; i <= 100; i++){
    d[i] = d[i-2] + d[i-3];
}

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++){
    let n = Number(input[t]);
    console.log(d[n]);
}

