function solution(s) {
    let answer = 0;
    const newArray = s.split(' ');
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] === 'Z'){
            newArray.splice(i-1,2);
            i = i - 2;
        }
    }
    for(let j = 0; j < newArray.length; j++){
        answer += Number(newArray[j])
    }
    return answer;
}