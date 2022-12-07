function solution(my_string) {
    const newArray = [];
    const numbers_string = my_string.replace(/[^0-9]/g, '').trim();
    for (let i=0; i < numbers_string.length; i++){
        newArray.push(Number(numbers_string[i]));
    }
    const answer = newArray.reduce((acc, cur) => acc + cur, 0) 
    return answer;
}