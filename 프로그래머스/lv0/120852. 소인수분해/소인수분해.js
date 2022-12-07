function solution(n) {
    let answer = [];
    let cnt = 0;
    for (let i = 1; i <= n; i++){
        if(n % i === 0) {
            answer.push(i);
        }
    }
    for (let j = 0; j <answer.length; j++){
        for(let t = 1; t <= answer[j]; t++){
        if (answer[j] % t === 0){
            cnt = cnt + 1;
        }
        }
        if (cnt !== 2) {
            answer.splice(j,1);
            j = j - 1; 
        }
        cnt = 0;
    }
    return answer;
}