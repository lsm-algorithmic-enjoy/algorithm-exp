let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let INF = 1e9;
let n = Number(input[0]);
let m = Number(input[1]);

let graph = [new Array(n + 1).fill(INF)];
for(let i = 1; i <= n; i++) {
    graph.push(new Array(n + 1).fill(INF));
    graph[i][i] = 0;
}

for(let i = 2; i <= m + 1; i++) {
    let [a,b,c] = input[i].split(' ').map(Number);
    graph[a][b] = Math.min(graph[a][b], c);
}

for(let k = 1; k <= n; k++){
    for(let a = 1; a <= n; a++){
        for(let b = 1; b <= n; b++){
            let cost = graph[a][k] + graph[k][b];
            if(graph[a][b] > cost) {
                graph[a][b] = cost;
            }
        }
}
}

for(let a = 1; a <= n; a++){
    let line = '';
    for (let b = 1; b <= n; b++){
        if(graph[a][b] === INF) line += '0 ';
        else line += graph[a][b] + ' ';
    }
    console.log(line)
}