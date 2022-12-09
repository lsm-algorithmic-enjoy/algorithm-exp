function solution(my_string) {
    let answer = '';
    const low = my_string.toLowerCase();
    answer = low.split('').sort().join('');
    return answer;
}