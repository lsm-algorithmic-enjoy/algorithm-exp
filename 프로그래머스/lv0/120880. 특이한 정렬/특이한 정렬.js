function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [aLength, bLength] = [Math.abs(a-n), Math.abs(b-n)];
        if(aLength === bLength) return b-a;
        return aLength - bLength;
    });
}