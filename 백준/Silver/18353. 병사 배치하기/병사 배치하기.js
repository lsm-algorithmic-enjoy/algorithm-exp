// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) { 
    while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기 
    else start = mid + 1;  
}
    return end; 
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse();

let d = [0];

for(x of arr) {
    if(d[d.length - 1] < x){
        d.push(x);
    }
    else {
        let index = lowerBound(d,x,0,d.length);
        d[index] = x;
    }
}

console.log(n - (d.length - 1));