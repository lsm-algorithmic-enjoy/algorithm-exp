function solution(lines) {
    const visited = lines.reduce((acc, [x,y]) => {
        for(let i = x + 1; i <= y; i++) acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
    }, {});
    console.log(visited);
    return Object.values(visited).filter(v => v > 1).length;
}