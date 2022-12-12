function solution(n) {
    let newArray = [0,1];
    for(let i = 2; i <= n; i++){
        newArray.push((newArray[i-2] + newArray[i-1])%1234567);
    }
    return newArray[n];
}

//오버플로우 주의하기!