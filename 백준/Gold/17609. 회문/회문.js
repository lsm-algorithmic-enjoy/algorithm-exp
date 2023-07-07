let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function palindrome(x) {
    return x === x.split('').reverse().join('');
}

let testCases = Number(input[0]);
for(let tc = 1; tc <= testCases; tc++){
    let data = input[tc];
    if (palindrome(data)) console.log(0);
    else {
        let found = false;
        let n = data.length;
        for (let i = 0; i < parseInt(n/2); i++){
            if(data[i] !== data[n - i - 1]){
                if(palindrome(data.slice(0,i) + data.slice(i+1,n))) found = true;
                if(palindrome(data.slice(0,n - i - 1) + data.slice(n-i,n))) found = true;
                break;
            }
        }
        if (found) console.log(1);
        else console.log(2);
    }
}