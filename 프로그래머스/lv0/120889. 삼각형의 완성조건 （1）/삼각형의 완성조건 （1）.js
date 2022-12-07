function solution(sides) {
    if((sides[0] +sides[1]) <= sides[2]) {
        return 2;
    }
    if((sides[0] +sides[2]) <= sides[1]) {
        return 2;
    }
    if((sides[1] +sides[2]) <= sides[0]) {
        return 2;
    }
    return 1;
}