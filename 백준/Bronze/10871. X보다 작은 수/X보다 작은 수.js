const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const [iter, pivot] = inputData[0].split(' ').map(Number);
const num = inputData[1].split(' ').map(Number);

let newNum = [];

for(let i = 0; i < iter; i++){
    if(num[i] < pivot){
        newNum.push(num[i]);
    }
}
console.log(newNum.join(' '));