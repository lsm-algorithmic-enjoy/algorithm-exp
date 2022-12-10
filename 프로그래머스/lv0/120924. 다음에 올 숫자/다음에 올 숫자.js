function solution(common) {

    let ratioArray = [];
    let minusArray = [];
    
    if(common.some(item => item === 0)){
        return common[common.length-1]+common[1]-common[0];
    }
    
    for(let i = 0; i < common.length-1; i++){
        ratioArray.push(common[i+1]/common[i]);
        minusArray.push(common[i+1]-common[i]);
    }
    
    const newratioArray = [...new Set(ratioArray)];
    const newminusArray = [...new Set(minusArray)];
    
    if(newratioArray.length === 1){
        return common[common.length-1]*newratioArray[0];
    }
    
    if(newminusArray.length === 1){
        return common[common.length-1]+newminusArray[0];
    }
    
}