function solution(babbling) {
    let answer = 0;
    for(let i = 0; i < babbling.length; i++){
        if(babbling[i].replace('aya',' ').replace('ye',' ').replace('woo',' ').replace('ma',' ').trim() === ''){
            answer += 1;
        }
    }
    return answer;
}