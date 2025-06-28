abstract class Institute{   
    abstract getInstitutionType() : void;
}
interface Management{
    addStudent(student : Students): void
    removeStudent(student : Students, id: number): void
}
class Students{
    name: string
    studentId: number

    constructor(name:string,studentId:number){
        this.studentId=studentId
        this.name=name
    }
}
class School extends Institute implements Management{
    
    studentList : Students[] = []  
    
    addStudent(student: Students): void {
        this.studentList.push(student) 
    }
    getInstitutionType(): void {
        console.log("School");
            
    }
    removeStudent(student: Students , id : number): void {
        this.studentList = this.studentList.filter((student)=>{
            return student.studentId != id
        })
    }   
    showStudentList():void{
        console.log(this.studentList);
    }
}

const s1 = new Students("tejas",1)
const s2 = new Students("shinde",2)
const s3 = new Students("patil",3)
const s4 = new Students("kevil",4)

const sc = new School()
sc.getInstitutionType()
sc.addStudent(s1)
sc.addStudent(s2)
sc.addStudent(s3)
sc.addStudent(s4)

sc.showStudentList()

sc.removeStudent(s1,1)
sc.showStudentList()


