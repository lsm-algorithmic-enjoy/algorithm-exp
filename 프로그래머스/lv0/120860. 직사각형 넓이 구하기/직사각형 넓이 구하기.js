function solution(dots) {
    let answer = 0;
    let newYArray = [];
    let newXArray = [];
    for(let i = 0; i < dots.length; i++){
        newYArray.push(dots[i][1]);
        newXArray.push(dots[i][0]);
    }
    newXArray = [...new Set(newXArray)];
    newYArray = [...new Set(newYArray)];
    return Math.abs(newXArray[0]-newXArray[1])*Math.abs(newYArray[0]-newYArray[1]);
    
}