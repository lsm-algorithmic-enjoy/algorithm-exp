function solution(s) {
    let answer = '';
    const s_array = s.split(' ');
    const newArray = [];
    for(let i = 0; i < s_array.length; i++){
        for(let j = 0; j < s_array[i].length; j++){
            if((j % 2 === 0)){
                answer += s_array[i][j].toUpperCase();
            }
            if((j % 2 === 1)){
                answer += s_array[i][j].toLowerCase();
            }
        }
        newArray.push(answer);
        answer = '';
    }
    answer = newArray.join(' ');
    return answer;
}