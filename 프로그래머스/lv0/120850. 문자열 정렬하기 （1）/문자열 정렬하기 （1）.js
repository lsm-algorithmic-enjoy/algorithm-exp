function solution(my_string) {
    const answer = [];
    const numbers_string = my_string.replace(/[^0-9]/g, '').trim();
    for (let i=0; i<numbers_string.length; i++){
        answer.push(Number(numbers_string[i]));
   
    }
    answer.sort((a,b) => a - b);
    return answer;
}