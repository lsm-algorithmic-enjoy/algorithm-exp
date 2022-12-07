function solution(n) {
    let cnt = 1;
    let answer = 0;
    while (true){
        if(cnt > n){
            break;
        }
        if (n % cnt === 0){
            answer += 1;
        }
        cnt = cnt + 1;
    }
    return answer;
}