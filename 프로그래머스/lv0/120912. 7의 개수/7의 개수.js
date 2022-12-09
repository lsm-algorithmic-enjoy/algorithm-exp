function solution(array) {
  
    const answer = array
    .join("")
    .split("")
    .filter((item) => item === "7").length;

  return answer;
}