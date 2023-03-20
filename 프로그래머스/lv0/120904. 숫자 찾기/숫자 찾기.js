function solution(num, k) {
    const str_num = String(num);
    if (str_num.includes(k)){
        return str_num.indexOf(k) + 1;
    }
    else return -1;
}