function solution(my_string) {
    let cnt = my_string.length -1;
    let new_string = '';
    while(cnt >= 0){
        new_string += my_string[cnt];
        cnt = cnt -1;
    }
    return new_string;
}