function solution(numbers, direction) {
    if (direction === "right") {
        let newnumbers = numbers.splice(numbers.length-1, 1);
        numbers.unshift(newnumbers[0]);
        return numbers;
    }
    if (direction === "left") {
        let newnumbers = numbers.splice(0, 1);
        numbers.push(newnumbers[0]);
        return numbers;
    }
}
