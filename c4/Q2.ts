class Students{
    name: string
    studentId: number

    constructor(name:string,studentId:number){
        this.studentId=studentId
        this.name=name
    }
}
class School{
    static totalStudents : number = 0
    studentList : Students[] = []

    addStudent(student: Students) : void {
        this.studentList.push(student)
        School.totalStudents++
    }
    showCount() : void{
        console.log(School.totalStudents);
    }
}

const s = new Students("tejas",1)
const s1 = new Students("shinde",2)

const a = new School();
a.addStudent(s)
a.addStudent(s1)

a.showCount()


