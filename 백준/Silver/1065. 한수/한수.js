const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const num = Number(input);

function hansu(num){
    let count = 0;
    
    for(let i = 1; i <= num; i++){
        if(i < 100){
            count++;
        } else if(i >= 100 && i < 1000){
            let strNum = String(i);
            
            let gap12 = Number(strNum[1])-Number(strNum[0]);
            let gap23 = Number(strNum[2])-Number(strNum[1]);
            
            if(gap12 === gap23){
                count++;
            }
        }
    }
    return count;
}

console.log(hansu(num));