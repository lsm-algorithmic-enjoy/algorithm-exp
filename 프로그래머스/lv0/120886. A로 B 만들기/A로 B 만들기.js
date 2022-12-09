function solution(before, after) {
  
    let beforeArray = before.split('');
    
    for(let i = 0; i < after.length; i++){
        if(beforeArray.includes(after[i])){
        let id = beforeArray.indexOf(after[i]);
        beforeArray.splice(id,1);
    }
    }
    console.log(beforeArray);
    if (beforeArray.length === 0){
        return 1;
    }
    else return 0;
}



