function solution(n) {
    let answer = 0;
    
    for(let i = 1 ; i <= n; i++){
        answer += 1;
        
        while(answer.toString().includes('3') || answer % 3 === 0){
            answer += 1;
}
}
    return answer;
}