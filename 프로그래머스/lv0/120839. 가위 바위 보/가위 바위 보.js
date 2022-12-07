function solution(rsp) {
    let answer = '';
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            answer = answer + '0';
        } 
        if (rsp[i] === '5') {
            answer = answer + '2';
        } 
        if (rsp[i] === '0') {
            answer = answer + '5';
        } 
    }
    return answer;
}