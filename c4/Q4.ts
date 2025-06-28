

abstract class Person {
    name : string
    id:number
    abstract getDetails(name:string,id:number): void;
    abstract getRole(): void;

}
class Student extends Person{
    getDetails(name:string,id:number): void {
        this.name = name
        this.id = id
        console.log(this.name +" "+this.id);
        
    }
    getRole(): void {
        console.log("Student");
        
    }
}
class Teacher extends Person{
    getDetails(name:string,id:number): void {
        this.name = name
        this.id = id
        console.log(this.name +" "+this.id);
        
    }
    getRole(): void {
        console.log("Teacher");
        
    }
}

const s1 = new Student();
s1.getDetails("tj",1)
s1.getRole()

const t1 = new Teacher();
t1.getDetails("tejas",2)
t1.getRole()
