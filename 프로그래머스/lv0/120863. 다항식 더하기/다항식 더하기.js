function solution(polynomial) {
    let xstring = '';
    let xstringnum = 0;
    let finalnum = 0;
    const polyArray = polynomial.split(' ');
    for(let i = 0; i < polyArray.length; i = i + 2){
        if(polyArray[i][polyArray[i].length-1] === 'x'){
         if(polyArray[i] === 'x'){
             xstring = '1';
         }   
         else   {
             for(let j = 0; j < polyArray[i].length-1; j++){
               xstring= xstring + polyArray[i][j];
}
         }
            xstringnum = xstringnum + parseInt(xstring);
            xstring = '';
}
        else finalnum = finalnum + parseInt(polyArray[i]); 
    }

    //애초에 문자열 0인 경우(but, 문제 조건 불분명하므로 일단 고려)
    //일차항만 나오는 경우, 단 x일때 매우주의
    //상수만 나오는 경우
    //일차항+상수 경우, 단 x일때 매우주의
   
    if(finalnum === 0 && xstringnum === 0) return "0";
    if(finalnum === 0){
       if(xstringnum === 1) return 'x';
       else return `${xstringnum}x`;
    }
    
    if (xstringnum === 0) return `${finalnum}`;
    if (xstringnum === 1) return `x + ${finalnum}`;
    return `${xstringnum}x + ${finalnum}`;
}