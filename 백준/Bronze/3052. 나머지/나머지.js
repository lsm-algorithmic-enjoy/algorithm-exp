const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = [];

input.forEach((x) => {
    const num = x % 42;
    
    if(arr.indexOf(num) === -1){
        arr.push(num);
    }
})

console.log(arr.length);