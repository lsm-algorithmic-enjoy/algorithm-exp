function solution(dots) {
    let answer = 0;
    let vecArray = [];
    for(let i = 1; i < dots.length; i++){
        let deltax = dots[i][0] - dots[0][0];  
        let deltay = dots[i][1] - dots[0][1];
        vecArray.push(deltay/deltax);
    }
    console.log(vecArray)
    
    const m1 = (dots[3][1]-dots[2][1])/(dots[3][0]-dots[2][0]);
    const m2 = (dots[3][1]-dots[1][1])/(dots[3][0]-dots[1][0]);
    const m3 = (dots[2][1]-dots[1][1])/(dots[2][0]-dots[1][0]);
    if(vecArray[0] === m1) return 1;
    if(vecArray[1] === m2) return 1;
    if(vecArray[2] === m3) return 1;
    return 0;
}