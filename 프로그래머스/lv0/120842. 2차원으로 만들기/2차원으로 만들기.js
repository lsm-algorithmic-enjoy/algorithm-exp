function solution(num_list, n) {
    let answer = [];
    
    for(let i=0; i<=((num_list.length / n)-1); i++){
        let newArray=[];
        for(let j=0; j<= n-1; j++){
            newArray.push(num_list[n*i+j]);
        }
        answer.push(newArray);
    }
    return answer;
}