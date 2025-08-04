function sum(numbers){
let total=0;
for (const num of numbers) {
    if(num%2==0){
        total+= num;
    }
}
return total;
}

console.log(sum([1,2,3,4,5]))