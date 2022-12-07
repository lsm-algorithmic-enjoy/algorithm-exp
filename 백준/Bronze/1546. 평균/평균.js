const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const iter = Number(input[0]);
const grade = input[1].split(' ').map(Number);

const maxGrade = Math.max(...grade);
let sum = 0;

for(let i = 0; i < iter; i++){
    sum += grade[i]/maxGrade*100;
}

console.log(sum/iter);