function solution(age) {
    let answer = "";
    const stringAge = String(age);
    
    let cnt = 0;
    while (cnt < stringAge.length){
        answer = answer+ String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);
        cnt = cnt + 1;
    }
    
    return answer;
}