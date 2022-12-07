function solution(my_string) {
    const newobj= new Set(my_string);
    const answer = [...newobj].join('');
    return answer;
}