const arr = [10,50,70,20,40]
const c = function findMax(arr){
    let max = 0
    for(let i = 0;i<=arr.length;i++){
        if (arr[i]>max){
            max= arr[i]
        }
        
    }
    return max
}
console.log(c(arr));



