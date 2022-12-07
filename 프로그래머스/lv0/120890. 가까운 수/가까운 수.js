function solution(array, n) {

    let newArray = [];
    array.sort((a,b) => a-b);
 
    for(let i = 0; i < array.length; i++){
        newArray.push(Math.abs(array[i]-n));
    }
    const num = Math.min(...newArray);
    const numindex = newArray.indexOf(num)
    const answer = array[numindex];
    return answer;
}