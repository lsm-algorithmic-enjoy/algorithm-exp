function solution(n, lost, reserve) {
    const livearray = [];
    let newlost = lost.filter(item => !reserve.includes(item));
    let newreserve = reserve.filter(item => !lost.includes(item));
    
    console.log(newlost);
    console.log(newreserve);
    
    for(let i = 0; i < newlost.length; i++){
        if(newreserve.includes(newlost[i]-1)){
            livearray.push(newlost[i]-1);
        }
        if(newreserve.includes(newlost[i]+1)){
            livearray.push(newlost[i]+1);
        }
    }
    const newlivearray = [...new Set(livearray)];
    const r = (newlivearray.length >= newlost.length ? newlost.length: newlivearray.length);
    
    const answer = n-(newlost.length-r);
    return answer;
}