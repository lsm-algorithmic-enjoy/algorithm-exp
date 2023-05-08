function solution(numbers) {
    let newArray = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            newArray.push(numbers[i]*numbers[j]);
        }
    }    
    newArray.sort((a,b) => a-b);
    return newArray[newArray.length-1];
}