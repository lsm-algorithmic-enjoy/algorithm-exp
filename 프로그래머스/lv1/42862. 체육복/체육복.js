function solution(n, lost, reserve) {
    let newlost = lost.filter(item => !reserve.includes(item)).sort();
    const newreserve = reserve.filter(item => !lost.includes(item)).sort();
    
    for(let i = 0; i < newreserve.length; i++){
        if(newlost.includes(newreserve[i]-1)){
            newlost = newlost.filter(item => item !== newreserve[i] - 1);
        }
        else if(newlost.includes(newreserve[i]+1)){
            newlost = newlost.filter(item => item !== newreserve[i] + 1);
        }
    }
    return n - newlost.length;
}