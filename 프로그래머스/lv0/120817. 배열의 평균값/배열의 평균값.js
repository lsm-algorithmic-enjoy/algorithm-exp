function solution(numbers) {
    let sum = 0;
    for(let i = 0 ; i <= numbers.length - 1 ; i++){
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}