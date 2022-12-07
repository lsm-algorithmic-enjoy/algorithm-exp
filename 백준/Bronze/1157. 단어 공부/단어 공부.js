const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const newInput = input.toUpperCase();

const countArr = new Array(26).fill(0);
let str = [];

for(let i = 0; i < input.length; i++){
    
    countArr[newInput.charCodeAt(i) - 65]++;
}

const max = Math.max(...countArr);

const index = countArr.indexOf(max);

let sameRate = false;

for(let i = 0; i < 26; i++){
    if(countArr[i] === max && index != i){
        sameRate = true;
        break;
    }
}

console.log(sameRate ? "?" : String.fromCharCode(index + 65));