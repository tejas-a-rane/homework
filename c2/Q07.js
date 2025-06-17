let stock = 5

function checkStock(amtreq){
    if(stock<amtreq){
        throw new Error("Item quantity unavailable")
    }
}

function addToCart(){
    checkStock(6)
}


try {
    addToCart()
} catch (error) {
    console.log(error.name +":"+error.message);
    
}
