const arr = [10,20,30,60,80,90]

const map = arr.map((arr)=>{
    return arr*2
})

const filter = arr.filter((arr)=>{
    return arr > 50
})
const reduce = arr.reduce((total,num)=>{
    return total + num
},0)

console.log(map);
console.log(filter);
console.log(reduce);


