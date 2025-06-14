const cartvalue = [100,200,30,50,70]

function totalCost(discount=10,cartvalue){
    const sum= cartvalue.reduce((total,cartvalue)=>{
        total = cartvalue + total 
        return total 
    },0)
    console.log("product prices are :");
    console.log(...cartvalue);
    

    
    const total = sum - sum*discount/100
    return total
}

const c = totalCost(20,cartvalue)
console.log("discounted price is:");
console.log(c);
