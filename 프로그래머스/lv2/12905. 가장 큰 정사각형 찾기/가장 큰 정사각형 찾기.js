function solution(board)
{
    let answer = 0;
    let top = 0;
    const row = board.length;
    const col = board[0].length;

    if(row < 2 || col < 2) {
        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; i++){
                if(board[i][j] === 1) return 1;
            }
        }
    }

    for(let x = 1; x < row; x++){
        for(let y = 1; y < col; y++){
            if(board[x][y] === 1){
                board[x][y] = Math.min(board[x-1][y-1], board[x-1][y], board[x][y-1])+1;
                if(board[x][y] > top) top = board[x][y];
            }
        }
    }

    answer = top*top;
    return answer;

}