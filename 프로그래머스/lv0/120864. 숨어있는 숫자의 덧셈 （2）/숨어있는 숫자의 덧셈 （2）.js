function solution(my_string) {
    let newArray = [];
    let newStr = '';
    
    
    for(let i = 0; i < my_string.length; i++){
        if(!isNaN(my_string[i])){
            newStr = newStr + my_string[i];
        }
        if((isNaN(my_string[i])) && (!isNaN(my_string[i-1]))){
            newArray.push(newStr);
            newStr = '';
        }
        if((i === my_string.length-1) && (!isNaN(my_string[i]))){
            newArray.push(newStr);
        }
    }
    const answerArr = newArray.map(strnum => Number(strnum));
    return answerArr.reduce((acc, cur) => acc + cur, 0);
}