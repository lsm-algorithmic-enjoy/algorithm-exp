function solution(spell, dic) {
    let tempArray = [];
    for(let i = 0; i < dic.length; i++){
        for(let j = 0; j < spell.length; j++){
           if(dic[i].includes(spell[j])){
               tempArray.push(true);
           }
           else tempArray.push(false);   
        }
        if(tempArray.every(value => value === true)){
                return 1;
            }
            tempArray = [];
    }
    return 2;
}