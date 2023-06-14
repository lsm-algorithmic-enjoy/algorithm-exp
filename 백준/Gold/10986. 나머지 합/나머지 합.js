let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let arr = [0, ...input[1].split(' ').map(Number)];

let sum = [0];
for (let i = 1; i <= n; i++){
    sum[i] = sum[i-1] + arr[i];
}

let processed = [];
let counter = {};
for (let i = 0; i <= n; i++){
    processed[i] = sum[i] % m;
    if(processed[i] in counter) counter[processed[i]] += 1;
    else counter[processed[i]] = 1;
}

let result = 0;
for (let i = 0; i < m; i++){
    if (i in counter) result += parseInt(counter[i] * (counter[i]-1) / 2);
}
console.log(result);