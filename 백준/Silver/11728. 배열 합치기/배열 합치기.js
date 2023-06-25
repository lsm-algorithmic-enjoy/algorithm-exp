let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let [n,m] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

let result = [];
let i = 0;
let j = 0;

while(i < n && j < m){
    if (a[i] < b[j]){
        result.push(a[i]);
        i += 1;
    }
    else {
        result.push(b[j]);
        j += 1;
    }
}

while (i < n){
    result.push(a[i]);
    i += 1;
}

while (j < m){
    result.push(b[j]);
    j += 1;
}

console.log(result.join(" "));