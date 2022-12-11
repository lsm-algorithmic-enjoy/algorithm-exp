function solution(M, N) {
 
    if (M < N){
        return (N-1)*M + M-1;
    }
    else {
        return (M-1)*N + N-1;
    }
}