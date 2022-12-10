function solution(num, total) {
    let answer = [];
    const avg = total/num;
    const numvec = Math.floor(num/2);
    
    if(num % 2 !== 0){
        for(let i = avg - numvec; i <= avg + numvec; i++) {
            answer.push(i);
        }
        return answer;
    }
    
        for(let k = Math.ceil(avg - numvec); k <= Math.floor(avg + numvec); k++){
            answer.push(k);
        }
        return answer;
    
    }
    