function solution(num_list) {
    let cnt = 0;
    let dcnt = 0;
    let ocnt = 0;
    while (cnt < num_list.length){
        if(num_list[cnt] % 2 === 0){
            dcnt += 1;
        }
        else {
            ocnt += 1;
    }                
        cnt = cnt + 1;
    }
return [dcnt,ocnt];
}