function solution(order) {
    let answer = 0;
    const string_order = String(order);
    for (let i=0; i < string_order.length; i++){
        if((string_order[i] === "3") || (string_order[i]==="6") || (string_order[i]==="9")){
            answer += 1;
        }
    }
    return answer;
}