function dfs(depth) {
    if (depth === n) {
        let current = 0;
        for (let i = 0; i < n -1; i++) current += Math.abs(result[i] - result[i + 1]);
        maxValue = Math.max(maxValue, current);
    }
    for (let i = 0; i < n; i++){
        if (visited[i]) continue;
        visited[i] = true;
        result.push(arr[i]);
        dfs(depth + 1);
        visited[i] = false;
        result.pop();
    }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let visited = new Array(10).fill(false);
let result = [];
let maxValue = -1e9;
dfs(0);
console.log(maxValue);

