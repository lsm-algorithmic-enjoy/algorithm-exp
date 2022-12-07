const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const iter = Number(input[0]);
let countGroupWord = 0;

for(let i = 1; i <= iter; i++){
    const str = input[i]
    let letter = [];
    let isGroupWord = true;
    
    for(let j = 0; j < str.length; j++){
        if(letter.indexOf(str[j]) === -1){
            letter.push(str[j]);
        } else{
            if(letter.indexOf(str[j]) !== letter.length - 1){
                isGroupWord = false;
                break;
            }
        }
    }
    
    if(isGroupWord){
        countGroupWord += 1;
    }
}

console.log(countGroupWord);