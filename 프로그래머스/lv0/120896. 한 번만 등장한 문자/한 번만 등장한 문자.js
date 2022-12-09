function solution(s) {
    let newArray = [];
    const dict = {};
    for(let i = 0; i < s.length; i++){
        if(newArray.includes(s[i])){
            dict[s[i]] = 'stop'
        }
         newArray.push(s[i]);
    }
    const answerArray = newArray.filter(item => dict[item] !== 'stop');
    
    return answerArray.sort().join('');
}