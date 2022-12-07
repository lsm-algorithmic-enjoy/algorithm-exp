function solution(box, n) {
    const num0 = Math.floor(box[0] / n);
    const num1 = Math.floor(box[1] / n);
    const num2 = Math.floor(box[2] / n);
    const answer = num0 * num1 * num2;
    return answer;
}