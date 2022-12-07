function solution(my_string) {
    let answer = '';
    for(let i =0; i <my_string.length; i++){
        if(my_string[i] === my_string[i].toUpperCase()){
            answer = answer + my_string[i].toLowerCase();
        }
        if(my_string[i] === my_string[i].toLowerCase()){
            answer = answer + my_string[i].toUpperCase();
        }
    }
    return answer;
}