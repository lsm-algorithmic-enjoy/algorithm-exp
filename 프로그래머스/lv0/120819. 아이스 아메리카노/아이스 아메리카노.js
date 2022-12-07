function solution(money) {
    const coffeeCnt = Math.floor(money/5500);
    const leftmoney = money%5500;
    return [coffeeCnt, leftmoney];
}