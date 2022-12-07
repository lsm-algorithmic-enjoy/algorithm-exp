const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

const iter = inputData[0];

for(let i = 1; i <= iter; i++){
    let data = inputData[i].split(' ').map(Number);
    let result = data.reduce(function add(sum,curr){
        return sum + curr
    },0);
    
    console.log(result);
}