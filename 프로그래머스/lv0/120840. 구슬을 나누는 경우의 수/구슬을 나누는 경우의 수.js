function solution(balls, share) {
    let x = 1;
    let y = 1;
    let answer = 0;
    for(let i = 0; i <= share-1; i++) {
        x = x * (balls-i);
    }
    for(let j = 0; j <= share-1; j++) {
        y = y * (share-j);
    }
    answer = x / y;
    return answer;
}