try {
    throw new Error("payment failed")
} catch (error) {
    console.log(error.name +":"+error.message); 
}