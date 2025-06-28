const db = require('./db');

function insertData(name,salary,department){
    const sql = "insert into students(name,salary,department) values(?,?,?)"
    db.query(sql,[name,salary,department],(error)=>{
        if (error) {
            console.log(error);
        }
        else{
            console.log("inserted!");
        }
    })

}

function deleteData(name){
    const sql= "delete from students where name= ?"

    db.query(sql,[name],(error)=>{
        if(error){
            console.log(error);
            
        }
        else{
            console.log("deleted!!");
            
        }
    })
}
function showData(){
    const sql="select * from students"
    db.query(sql,(error,res)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(res);
        }
    })
}

function updateData(name,value){
    const sql="update students set salary = ? where name = ?"
    db.query(sql,[value,name],(error)=>{
        if(error){
            console.log(error);
            
        }
        else{
            console.log("updated");
            
        }
    })
}

insertData("tejas",12345,"comp");
insertData("aditya",12345,"engg");
showData();
updateData("tejas",54321);
showData();
deleteData("tejas")
showData();
