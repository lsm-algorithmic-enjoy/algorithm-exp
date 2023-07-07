let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function nearestSquare(x) {
    let i = 1;
    while((2 ** i) <= x) i += 1;
    return i - 1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);
let cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++){
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    cubes[a] = b;
}

let size = 19;
size = Math.min(nearestSquare(length), nearestSquare(width), nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--){
    used *= 8;
    cur = (2 ** i);
    let required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;
    
    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
}

if(used === width * height * length) console.log(res);
else console.log(-1);