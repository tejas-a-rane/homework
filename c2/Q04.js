function payment(success){
    return new Promise((resolve,reject)=>{
        if(success){
            resolve("Completed")
        }else{
            reject("Incomplete")
        }
    })
}

async function test(){
    try {
        const result = await payment(false )
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

test()
