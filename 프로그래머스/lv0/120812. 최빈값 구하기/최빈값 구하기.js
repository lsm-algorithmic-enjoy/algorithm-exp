function solution(array) {
    let sortedArray = array.sort((a, b) => a-b);
    let cnt = 0;
    let choi = -1;
    let choiRepeatCnt = 0;
    let repeatCnt = 0;
    let beforeNumber = -1;
    let isDupChoi = false;
    while(cnt < array.length) {
        if(beforeNumber !== array[cnt]){
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        if(repeatCnt === choiRepeatCnt){
            if(choi !== array[cnt]){
                isDupChoi =true;
            }
        }
        
        if(repeatCnt > choiRepeatCnt) {
            choi = array[cnt];
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
        beforeNumber = array[cnt];
        cnt = cnt + 1;
    }
    if(isDupChoi) return -1;
    return choi;
}

