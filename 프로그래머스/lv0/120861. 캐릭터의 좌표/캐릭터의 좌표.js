function solution(keyinput, board) {
    const answer = [0,0];
    const halfheight = Math.floor(board[1] / 2);
    const halfwidth = Math.floor(board[0] / 2);
    
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === "left"){
            answer[0] = answer[0] - 1;
        }
        if(keyinput[i] === "right"){
            answer[0] = answer[0] + 1;
        }
        if(keyinput[i] === "up"){
            answer[1] = answer[1] + 1;
        }
        if(keyinput[i] === "down"){
            answer[1] = answer[1] - 1;
        }
        
    if(answer[0] < -halfwidth){
        answer[0] = -halfwidth;
    }
    
    if(answer[0] > halfwidth){
        answer[0] = halfwidth;
    }
    
    if(answer[1] < -halfheight){
        answer[1] = -halfheight;
    }
    
    if(answer[1] > halfheight){
        answer[1] = halfheight;
    }
}
    return answer;
}