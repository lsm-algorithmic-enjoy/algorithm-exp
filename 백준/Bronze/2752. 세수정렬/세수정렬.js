let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number);

arr.sort(function(a,b) {
    return a - b;
})
let answer = "";
for(let i = 0; i < arr.length; i++){
    answer += arr[i] + " ";
}

console.log(answer);