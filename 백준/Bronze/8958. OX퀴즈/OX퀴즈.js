const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const iter = Number(input[0]);

for(let i = 1; i <= iter; i++){
    let sum = 0;
    let onlyO = input[i].split('X');
    
    for(let j = 1; j<= onlyO.length; j++){
        let grade = onlyO[j-1].split('').length;
        
        for(let k = 1; k <= grade; k++){
            sum += k;
        }
    }
    console.log(sum);
}