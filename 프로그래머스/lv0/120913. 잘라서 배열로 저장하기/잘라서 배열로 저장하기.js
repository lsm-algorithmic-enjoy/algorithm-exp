function solution(my_str, n) {
    let answer = [];
    let container = [];
    let answerstring = '';
    for(let i = 0; i < my_str.length; i = i + n){
        for(let j = i; j < i + n; j++){
            if(j > my_str.length-1){
                break;
            }
            container.push(my_str[j]);
        }
        answerstring = container.join('');
        answer.push(answerstring);
        container = [];
    }
    return answer;
}