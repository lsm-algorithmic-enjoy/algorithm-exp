function solution(sides) {
    let answer = 0;
    const sumlength = sides[0] + sides[1];
    const smallsize = Math.min(...sides);
    const bigsize = Math.max(...sides);
    
    for(let i = 1; i < sumlength; i++){
        if(smallsize + i > bigsize){
            answer += 1;
        }
    }
    
    return answer;
}