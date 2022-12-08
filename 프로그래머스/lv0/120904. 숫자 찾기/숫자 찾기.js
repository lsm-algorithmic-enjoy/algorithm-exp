function solution(num, k) {
    let answer = 0;
    let str_num = String(num);
    if (str_num.includes(k)){
        return str_num.indexOf(k) + 1;
    }
    else return -1;
}