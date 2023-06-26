let input = require('fs').readFileSync('/dev/stdin');
input = input.toString().split('\n');

let [n,m] = input[0].split(" ").map(Number);
let data = input[1].split(" ").map(Number);

let cnt = 0;
let intervalsum = 0;
let end = 0;

for (let start = 0; start < n; start++){
    while (intervalsum < m && end < n) {
        intervalsum += data[end];
        end += 1;
    }
    if (intervalsum === m) cnt += 1;
    intervalsum -= data[start];
}

console.log(cnt);