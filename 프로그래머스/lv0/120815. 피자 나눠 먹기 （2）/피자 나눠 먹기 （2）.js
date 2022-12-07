function solution(n) {
    let pizzaCount = 1;
    while(true) {
        if(pizzaCount * 6 % n === 0){
            return pizzaCount;
        }
        pizzaCount = pizzaCount + 1;
    }
}