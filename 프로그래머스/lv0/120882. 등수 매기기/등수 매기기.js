function solution(score) {
    const answer = [];
    const avgArray = [];
    const scoreObj = {};
    const sortedscoreObj = {};
    const sbs = [1];
    for(let i = 0; i < score.length; i++){
       let avg = (score[i][0] + score[i][1])/2
       avgArray.push(avg);
       scoreObj[i] = avg;
    }
    
    console.log(scoreObj)
    
    const sortavgarr = avgArray.sort((a,b) => b-a);
    
    for(let i = 1; i < sortavgarr.length; i++){
        if(sortavgarr[i-1] > sortavgarr[i]){
            sbs.push(i+1);
        }
        if(sortavgarr[i-1] === sortavgarr[i]){
            sbs.push(sbs[i-1]);
        }
    }
    
    for(let i = 0; i < sbs.length; i++){
        sortedscoreObj[sortavgarr[i]] = sbs[i];
    }
    console.log(sortedscoreObj)
    
    for(let k = 0; k < score.length; k++){
    answer.push(sortedscoreObj[scoreObj[k]]);
    }
    return answer;
}