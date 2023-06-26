let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let x = Number(input[2]);

arr.sort((a,b) => a-b);

let result = 0;
let start = 0;
let end = n - 1;

while(true) {
    while (end > 0 && arr[start] + arr[end] > x){
        end -= 1;
    }
    if(arr[start] + arr[end] === x){
        result += 1;
        end -= 1;
    }
    start += 1;
    if (start >= end) break;
}

console.log(result);