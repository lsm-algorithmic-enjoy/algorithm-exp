const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();

const num = Number(inputData);
let result = '';

for(let i = 1; i <=num; i++){
    for(let j = 1; j <= i; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);