let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]);

dp = [];
for (let i = 1; i <= n; i++){
    dp.push(Number(input[i]));
}

for (let i = 1; i < n; i++){
    dp[i] = Math.max(dp[i], dp[i] * dp[i-1]);
}

console.log(Math.max(...dp).toFixed(3));