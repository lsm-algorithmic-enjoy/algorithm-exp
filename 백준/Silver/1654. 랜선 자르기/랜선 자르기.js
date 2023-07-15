let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let k = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);

let arr = [];
for(let i = 1; i <= k; i++) arr.push(Number(input[i]));

let start = 1;
let end = arr.reduce((a,b) => Math.max(a,b));

let result = 0;
while(start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (x of arr) total += parseInt(x / mid);
    if(total < n) end = mid - 1;
    else {
        result = mid;
        start = mid + 1;
    }
}

console.log(result);