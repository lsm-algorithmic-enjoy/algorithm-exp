function solution(A, B) {
    
    let solutionArr = [...A];
    
    for(let i = 0; i < solutionArr.length; i++){
        if(A === B){
            return i;
        }
        else{
            solutionArr.unshift(solutionArr.pop());
            if (solutionArr.join('') === B) {
                return i+1;
            }
        }
    }
    return -1;
}