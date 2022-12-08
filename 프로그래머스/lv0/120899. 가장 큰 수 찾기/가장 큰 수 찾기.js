function solution(array) {
    let answer = [];
    const num = Math.max(...array);
    answer.push(num);
    answer.push(array.indexOf(num));
    return answer;
}