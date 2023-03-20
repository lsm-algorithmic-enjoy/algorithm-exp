function solution(array) {
    const answer = [];
    answer.push(Math.max(...array));
    answer.push(array.indexOf(Math.max(...array)));
    return answer;
}