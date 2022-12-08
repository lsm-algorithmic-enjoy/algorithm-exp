function solution(my_string) {
    
    const My_arr = my_string.split(' ');
    let answer = parseInt(My_arr[0]);
    console.log(My_arr);
        for(let j = 1; j < (My_arr.length - 1) ; j = j + 2){
            
            if(My_arr[j] === '+'){
                 answer = answer + parseInt(My_arr[j+1]);
            }
            if(My_arr[j] === '-'){
                answer = answer - parseInt(My_arr[j+1]);
            }
        }
    return answer;
}