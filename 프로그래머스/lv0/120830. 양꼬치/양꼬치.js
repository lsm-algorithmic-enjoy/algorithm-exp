function solution(n, k) {
    let money = 12000*n + 2000*k 
    money = money-2000*Math.floor(n/10);
    return money;
}