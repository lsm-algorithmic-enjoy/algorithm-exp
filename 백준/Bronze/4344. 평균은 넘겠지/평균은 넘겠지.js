const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const iter = Number(input[0]);

for(let i = 1; i <= iter; i++){
    let inputData = input[i].split(' ').map(Number);
    let studentNum = inputData.shift();
    let avg = 0;
    let count = 0;
    
    let sum = inputData.reduce(function add(sum, curr) {
        return sum + curr;
    }, 0);
    
    avg = sum / studentNum;
    
    for(let j = 0; j < studentNum; j++){
        if(inputData[j] > avg){
            count++
        }
    }
    
    const ratio = ((count/studentNum)*100).toFixed(3);
    console.log(`${ratio}%`);
}

