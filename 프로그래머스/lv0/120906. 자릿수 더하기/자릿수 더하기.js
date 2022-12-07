function solution(n) {
    let answer = 0;
    const n_string = String(n);
    for(let i=0; i<n_string.length; i++){
        answer += Number(n_string[i]);
    }
    return answer;
}