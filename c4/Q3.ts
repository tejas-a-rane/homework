class Course{
    courseName : string
    courseCode : number
    instructor : string
    constructor(courseName:string,courseCode : number,instructor: string){
        this.courseCode= courseCode
        this.courseName = courseName
        this.instructor = instructor
    }
}
const a = new Course("maths",25,"Aditya")
