// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) { 
    while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기 
    else start = mid + 1;  
}
    return end; 
}
// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
    while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동하기
}
    return end; 
}

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
   let rightIndex = upperBound(arr, rightValue, 0, arr.length);
   let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
   return rightIndex - leftIndex;
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); 
let arr = input[1].split(' ').map(Number); let m = Number(input[2]); 
let query = input[3].split(' ').map(Number);

arr.sort((a, b) => a - b); 

answer = '';
for (let i = 0; i < m; i++) {
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + ' ';
}

console.log(answer);