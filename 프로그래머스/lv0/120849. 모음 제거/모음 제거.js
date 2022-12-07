function solution(my_string) {
  const answer = my_string.replace(/a/gi,'').replace(/e/gi,'').replace(/i/gi,'').replace(/o/gi,'').replace(/u/gi,'');
    return answer;
}