function solution(citations) {
    citations.sort((a,b) => a-b);  
    const length = citations.length;
    
    for (let i = 0; i < length; i++){
        const h = length - i;
        if(citations[i] >= h){
            return h;
        }
    }
    return 0;
}