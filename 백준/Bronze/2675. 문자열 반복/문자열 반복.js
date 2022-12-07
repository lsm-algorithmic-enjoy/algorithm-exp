const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const mainIter = Number(input[0]);

for(let i = 1; i <= mainIter; i++){
    let inputData = input[i].split(' ');
    let iter = Number(inputData[0]);
    let str = inputData[1];
    let newStr = '';
    
    for(let j = 0; j < str.length; j++){
        for(let k = 0; k < iter; k++){
            newStr += str[j];
        }
    }
    
    console.log(newStr);
}

