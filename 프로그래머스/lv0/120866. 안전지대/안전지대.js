function solution(board) {
    let cnt = 0;
    const newboard = board.map((item)=> [...item]);
    //이차원 배열 복사시 각각의 행을 복사해줘야 깊은 복사 가능.
    if(board.length === 1){
        if(board[0][0] === 1){
            return 0;
        } 
        return 1;
    }
    //보드 한변 길이가 1인 경우 예외 처리
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === 1){
            if((i !== 0) && (i !== board.length-1) && (j !== 0) && (j !== board.length-1)){
                newboard[i-1][j-1] = 2;
                newboard[i-1][j] = 2;
                newboard[i-1][j+1] = 2;
                newboard[i][j-1] = 2;
                newboard[i][j] = 2;
                newboard[i][j+1] = 2;
                newboard[i+1][j-1] = 2;
                newboard[i+1][j] = 2;
                newboard[i+1][j+1] = 2;
            }
            if((i === 0) && (j === 0)){
                newboard[i][j] = 2;
                newboard[i][j+1] = 2;
                newboard[i+1][j+1] = 2;
                newboard[i+1][j] = 2;
            }
            if((i === 0) && (j === newboard.length-1)){
                newboard[i][j] = 2;
                newboard[i][j-1] = 2;
                newboard[i+1][j-1] = 2;
                newboard[i+1][j] = 2;
            }
            if((i === newboard.length-1) && (j === 0)){
                newboard[i][j] = 2;
                newboard[i-1][j] = 2;
                newboard[i-1][j+1] = 2;
                newboard[i][j+1] = 2;
            }
            if((i === newboard.length-1) && (j === newboard.length-1)){
                newboard[i][j] = 2;
                newboard[i-1][j-1] = 2;
                newboard[i-1][j] = 2;
                newboard[i][j-1] = 2;
            }
            if((i === 0) && (j !== 0 && j !== board.length-1)){
                newboard[i][j-1] = 2;
                newboard[i][j] = 2;
                newboard[i][j+1] = 2;
                newboard[i+1][j-1] = 2;
                newboard[i+1][j] = 2;
                newboard[i+1][j+1] = 2;
               }
            if((i === board.length-1) && (j !== 0 && j !== board.length-1)){
                newboard[i-1][j-1] = 2;
                newboard[i-1][j] = 2;
                newboard[i-1][j+1] = 2;
                newboard[i][j-1] = 2;
                newboard[i][j] = 2;
                newboard[i][j+1] = 2;
               }
            if((j === 0) && (i !== 0 && i !== board.length-1)){
                newboard[i-1][j] = 2;
                newboard[i][j] = 2;
                newboard[i+1][j] = 2;
                newboard[i-1][j+1] = 2;
                newboard[i][j+1] = 2;
                newboard[i+1][j+1] = 2;
               }
            if((j === board.length-1) && (i !== 0 && i !== board.length-1)){
                newboard[i-1][j] = 2;
                newboard[i][j] = 2;
                newboard[i+1][j] = 2;
                newboard[i-1][j-1] = 2;
                newboard[i][j-1] = 2;
                newboard[i+1][j-1] = 2;
               }
        }
    }
}
     for(let i = 0; i < newboard.length; i++){
        for(let j = 0; j < newboard.length; j++){
            if(newboard[i][j] === 2){
                cnt = cnt + 1;
            }
        }
     }
    const answer = Math.pow(board.length, 2) - cnt;
    return answer;
}