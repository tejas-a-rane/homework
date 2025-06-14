let stock = 10
class Quant extends Error{
    constructor(message){
        super(message)
        this.name="Stock issue"
    }
}

function reduceStock(count){
    try {
        if(stock<5)
        throw new Quant("Not enough quantity")
        stock = stock - count
        console.log("stock remaining:"+stock);
    
    } catch (error) {
        console.log(error.name +":" + error.message);
    }
}

reduceStock(3)
reduceStock(1)
reduceStock(5)
reduceStock(3)
