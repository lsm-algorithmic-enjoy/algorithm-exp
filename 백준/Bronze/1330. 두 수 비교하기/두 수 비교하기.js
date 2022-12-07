const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

if(A > B){
    console.log('>');
} else if(A < B){
    console.log('<');
} else {
    console.log('==');
}
