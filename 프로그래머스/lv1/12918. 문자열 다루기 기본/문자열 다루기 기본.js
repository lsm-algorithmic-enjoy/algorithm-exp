function solution(s) {
    const strto_arr = s.split('');
    const bool1 = strto_arr.every((item) => !isNaN(parseInt(item)));
    const bool2 = (strto_arr.length === 6) || (strto_arr.length === 4) ;
    
    if(bool1 && bool2){
        return true;
    }
    return false;
}