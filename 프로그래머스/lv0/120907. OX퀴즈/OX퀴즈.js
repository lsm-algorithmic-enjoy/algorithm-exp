function solution(quiz) {
    const answer = [];
    let temp = 0;
    for(let i = 0; i < quiz.length; i++){
        const quizarr = quiz[i].split(' ');
        console.log(quizarr);
        if(quizarr[1] === '+'){
            temp = parseInt(quizarr[0]) + parseInt(quizarr[2]);
        }
        else temp = parseInt(quizarr[0]) - parseInt(quizarr[2]);
        
        if(temp === parseInt(quizarr[4])){
            answer.push('O');
        }
        else answer.push('X');
 
    }
    return answer;
}