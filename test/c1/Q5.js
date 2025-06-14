const arr = [10,20,30,60,80,90]

const map = arr.map((arr)=>{
    if(arr>90){return "A"}
    else if(arr>70){return "B"}
    else return "C" 
})

const filter = arr.filter((arr)=>{
    return arr > 75
})
const reduce = arr.reduce((total,num)=>{
    return total + num
},0)

console.log(map);
console.log(filter);
console.log(reduce);