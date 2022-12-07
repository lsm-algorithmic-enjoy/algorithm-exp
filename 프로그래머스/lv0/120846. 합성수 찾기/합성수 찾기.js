function solution(n) {
    let answer = 0;
    let cnt = 0;
    for(let i = 1 ; i <= n; i++) {
        for(let j = 1; j <=n; j++){
            if(i % j === 0){
                cnt = cnt + 1;
            }
            if (cnt === 3){
                answer = answer + 1;
                break;
            }
        }
        cnt = 0;
    }
    return answer;
}