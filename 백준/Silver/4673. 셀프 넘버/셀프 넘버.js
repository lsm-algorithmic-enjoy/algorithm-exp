let arr = [];
const range = 10000;

for(let i = 1; i <= range; i++){
    let sum = 0;
    let num = String(i);


for(let j = 0; j < num.length; j++){
    sum += Number(num[j]);
}
    let allSum = i + sum;
    arr.push(allSum);
}

for(let i = 1; i <= range; i++){
    if(arr.indexOf(i) ===-1){
        console.log(i);
    }
}