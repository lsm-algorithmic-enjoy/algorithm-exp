function solution(chicken) {
    let result = 0;
    let leftcoupon = chicken;
    while(leftcoupon >= 10){
        result = result + Math.floor(leftcoupon/10);
        leftcoupon = Math.floor(leftcoupon/10) + (leftcoupon%10);
    }
    return result;
}