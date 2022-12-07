function solution(n) {
    let num = 1;
    for (let i = 1;; i++){
        num = num * i
        if (num > n) return (i - 1);
    }
}