function solution(n)
{
    let answer = 0;
    
    do {
        answer = answer + n % 10;
        n = Math.floor(n / 10);
    } while (n > 0)
    
    return answer;
}