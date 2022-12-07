function solution(my_string, letter) {
    let cnt = 0;
    let newString = "";
    while (cnt < my_string.length){
        if(my_string[cnt] !== letter){
            newString += my_string[cnt] ;
        }
        cnt = cnt + 1;
    }
    return newString;
}