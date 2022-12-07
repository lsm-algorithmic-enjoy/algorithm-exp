function solution(emergency) {
    let newEmergencyArray = [];
    let cnt = 0;
    let answer = new Array(emergency.length);
    let i = 0;
    while(cnt < emergency.length) {
        newEmergencyArray.push({value: emergency[cnt], idx: cnt});
        cnt = cnt + 1;
    }
    newEmergencyArray.sort((a, b) => b.value - a.value);
    while (i < emergency.length) {
        let item = newEmergencyArray[i];
        answer[item.idx] = i + 1; 
            i += 1;
    }
    return answer;
}