let stock = 5

function meth(amtreq){
    if(stock<amtreq){
        throw new Error("Item quantity unavailable")
    }
}

function meth2(){
    meth(6)
}

function meth3(){
    meth2()
}

try {
    meth3()
} catch (error) {
    console.log(error.name +":"+error.message);
    
}