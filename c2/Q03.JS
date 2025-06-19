function payment(success){
    return new Promise((resolve,reject)=>{
        if(success){
            resolve("Completed")
        }else{
            reject("Incomplete")
        }
    })
}

payment(true).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error); 
})
