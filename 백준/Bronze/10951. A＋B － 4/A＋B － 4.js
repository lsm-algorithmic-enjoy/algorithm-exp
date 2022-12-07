const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

for(let i = 0; i < inputData.length; i++){
    let data = inputData[i].split(' ').map(Number);
    console.log(data[0] + data[1]);
}