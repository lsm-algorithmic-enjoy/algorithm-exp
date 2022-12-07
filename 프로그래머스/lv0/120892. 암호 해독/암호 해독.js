function solution(cipher, code) {
    let answer = '';
    for(let i = code;i <= cipher.length ; i = i + code){
        answer= answer + cipher[i-1];
    }
    return answer;
}