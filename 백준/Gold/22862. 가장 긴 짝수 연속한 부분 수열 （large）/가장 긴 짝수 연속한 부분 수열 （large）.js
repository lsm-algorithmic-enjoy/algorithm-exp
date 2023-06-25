let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let [n,k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = 0;
let eraseCount = 0;

for (let start = 0, end = 0; start < n; start++){
    while (end < n) {
        if(arr[end] % 2 === 0) end++;
        else {
            if(eraseCount === k) break;
            eraseCount++;
            end++;
        }
    }
    result = Math.max(result, end - start - eraseCount);
    if (arr[start] % 2 === 1) eraseCount--;
}
console.log(result);