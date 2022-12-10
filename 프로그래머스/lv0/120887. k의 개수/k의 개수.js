function solution(i, j, k) {
 
    let newStr = '';
    let newArray = [];
    for(let m = i; m <= j; m++){
        newStr = newStr + `${m}`;
    }
    for(let n = 0; n < newStr.length; n++){
        newArray.push(newStr[n]);
    }
    const answerArray = newArray.filter(item => item === `${k}`);
    return answerArray.length;
}