const fs = require('fs');

const [start, cook] = fs.readFileSync('/dev/stdin').toString().split('\n');

let time = start.split(' ').map(Number);
let hour = time[0];
let min = time[1];

let endMin = min + Number(cook);

if(endMin >= 60){
    hour += parseInt(endMin/60);
    endMin %= 60;
}

if(hour > 23){
    hour -= 24;
}

console.log(hour, endMin);