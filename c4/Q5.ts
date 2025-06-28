interface Attendance{
    markAttendance():void
}
class Students implements Attendance{
    name: string
    studentId: number
    attendance : number = 0
    constructor(name:string,studentId:number){
        this.studentId=studentId
        this.name=name
    }
    markAttendance(): void {
        this.attendance++
    }
    showAttendance(): void{
        console.log(this.attendance);
    }
}

const a = new Students("tejas",1);
a.markAttendance();
a.markAttendance();
a.markAttendance();
a.showAttendance();