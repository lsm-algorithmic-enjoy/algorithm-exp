function solution(n) {
    let answer = 0;
    for(let i = n; i >= 1; i--){
        let isCount = false;
        for(let num =2; num <= i-1; num++){
            if(i % num === 0){
                isCount = true;
            }
        }
        if (isCount){
            answer +=1;
        }
    }
    return answer;
}