let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);

let d = new Array(50).fill(0)
d[0] = 1;
d[1] = 1;
d[2] = 2;

function dp(x) {
    if(d[x] !== 0) return d[x];
    d[x] = dp(x-1) + dp(x-2);
    return d[x];
}

let arr = [];
let start = 0;
for (let i = 2; i < m + 2; i++){
    end = Number(input[i]);
    arr.push(end - 1- start);
    start = end;
}

arr.push(n-start);

let res = 1;
for (let x of arr) res *= dp(x);

console.log(res);
