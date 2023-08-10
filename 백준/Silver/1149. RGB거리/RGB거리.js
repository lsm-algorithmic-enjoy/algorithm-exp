let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]);

arr = [];
d = [];
for (let i = 0; i < n; i++){
    let [r,g,b] = input[i+1].split(' ').map(Number);
    d.push(new Array(3).fill(1000000));
    arr.push([r,g,b]);
}

d[0][0] = arr[0][0];
d[0][1] = arr[0][1];
d[0][2] = arr[0][2];

for (let i = 1; i < n; i++){
    for (let j = 0; j < 3; j++){
        for(let k = 0; k < 3; k++){
            if (j !== k) d[i][j] = Math.min(d[i][j], arr[i][j] + d[i-1][k]);
        }
    }
}

console.log(Math.min(d[n-1][0], d[n-1][1], d[n-1][2]));