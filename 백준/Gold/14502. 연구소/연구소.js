let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let data = [];
let temp = [];
for (let i = 1; i <= n; i++){
    let line = input[i].split(' ').map(Number);
    data.push(line);
    temp.push(new Array(m).fill(0));
}

let dx = [-1,0,1,0];
let dy = [0,1,0,-1];
let result = 0;

function virus(x,y) {
    for (let i = 0; i < 4; i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (temp[nx][ny] === 0) {
            temp[nx][ny] = 2;
            virus(nx,ny);
}
}
}

function getScore() {
    let score = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (temp[i][j] === 0) score += 1;
    return score;
}

function dfs(count) {
    if (count === 3) {
        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
            temp[i][j] = data[i][j];
        for (let i = 0; i < n; i++)
            for (let j = 0; j < m; j++)
                if(temp[i][j] === 2) virus(i,j);
        result = Math.max(result, getScore());
        return;
    }
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if(data[i][j] === 0) {
                data[i][j] = 1;
                dfs(count + 1);
                data[i][j] = 0;
            }
}

dfs(0);
console.log(result);