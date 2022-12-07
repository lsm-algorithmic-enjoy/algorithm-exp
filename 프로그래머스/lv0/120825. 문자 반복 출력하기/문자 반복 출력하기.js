function solution(my_string, n) {
    new_string = "";
    cnt = 0;
    while (cnt < my_string.length) {
        const repeatCh = my_string[cnt];
        let repeatCnt = 0;
        while (repeatCnt < n){
            new_string = new_string + repeatCh;
            repeatCnt+=1;
        }
        cnt = cnt + 1;
}
    return new_string;
}