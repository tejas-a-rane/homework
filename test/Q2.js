const calculateGrade = (score) =>{
    if(score > 90){
        return "A"
    }else if(score> 80){
        return "B"
    }else{
        return "C"
    }
}

console.log(calculateGrade(60))