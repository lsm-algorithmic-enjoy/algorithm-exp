let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

let answer = '';
function dfs(arr, depth, start) {
    if(depth === m) {
        let result = [];
        for(let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + " ";
        answer += "\n";
        return;
    }
    for(let i = start; i < arr.length; i++) {
        if(visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(arr, 0, 0);
console.log(answer);