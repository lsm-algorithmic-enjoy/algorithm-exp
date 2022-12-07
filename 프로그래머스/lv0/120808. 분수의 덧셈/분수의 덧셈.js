function solution(denum1, num1, denum2, num2) {
const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    
    
    let minNumber;
    if(denum < num) {
        minNumber = denum;
    }
    else {
        minNumber = num;
    }  
    
    while(true) {
        if(denum % minNumber === 0){
            if(num % minNumber === 0) {
                return [denum / minNumber, num / minNumber];
            }
        }
        minNumber = minNumber -1;
    }
}