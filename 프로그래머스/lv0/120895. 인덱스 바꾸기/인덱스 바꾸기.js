function solution(my_string, num1, num2) {
   
    const ch1 = my_string[num1]; 
    const ch2 = my_string[num2]; 
    let answer = '';
    
    for(let i = 0; i < my_string.length; i++){
        if( i === num1 ){
            answer = answer + ch2;
            i = i + 1;
        }
        if( i === num2 ){
            answer = answer + ch1;
            i = i + 1;
        }
        if( i === my_string.length){
            return answer;
        }
        answer = answer + my_string[i]
    }   
    return answer;
}