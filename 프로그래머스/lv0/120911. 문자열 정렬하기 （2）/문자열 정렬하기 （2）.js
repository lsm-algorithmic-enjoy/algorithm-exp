function solution(my_string) {
    const low = my_string.toLowerCase();
    return low.split('').sort().join('');
}