const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    let data = input[1].split(' ').map(Number);
    let result = 0;
    let arrow = new Array(1000001).fill(0);
    for(let x of data) {
        if(arrow[x] > 0) {
            arrow[x] -= 1;
            arrow[x-1] += 1;
        }
        else {
            arrow[x-1] += 1;
            result += 1;
        }
    }
    console.log(result);
    process.exit();
})