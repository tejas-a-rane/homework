function totalCost(discount=10,...cartvalue){
    const sum= cartvalue.reduce((total,cartvalue)=>{
        total = cartvalue + total 
        return total 
    },0)
    console.log("product prices are :");
    console.log(...cartvalue);
    

    
    const total = sum - sum*discount/100
    return total
}

const c = totalCost(undefined,10,20,30,40)
console.log("discounted price is:"+c);
