function solution(a, b) {
    let aArray = [];
    let bArray = [];
    
    for(let i = 1; i <= a; i++){
        if((a % i) === 0){
        aArray.push(i);
        }
    }

    for(let i = 1; i <= b; i++){
        if((b % i) === 0){
        bArray.push(i);
        }
    }
        
    const numarray = aArray.filter(item => bArray.includes(item));
    const num = Math.max(...numarray);
    let newnum = b / num;
    
    do {
     if(newnum % 2 === 0){   
        newnum = newnum / 2;
     }
     if(newnum % 5 === 0){   
        newnum = newnum / 5;
     }
     if(newnum === 1) return 1;
     if((newnum % 2 !== 0) && (newnum % 5 !== 0)){
         return 2;
     }  
    } while (newnum !== 1)
    
}