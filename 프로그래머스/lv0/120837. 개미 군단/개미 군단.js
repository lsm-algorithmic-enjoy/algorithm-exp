function solution(hp) {
    let answer = 0;
    if (hp % 5 === 0) {
        answer = hp / 5;
        return answer;
    }
    if ((hp % 5 === 4) || (hp % 5 === 2)) {
        answer = Math.floor(hp / 5) + 2;
        return answer;
    }
    if ((hp % 5 === 3) || (hp % 5 === 1)) {
        answer = Math.floor(hp / 5) + 1;
        return answer;
    }
}