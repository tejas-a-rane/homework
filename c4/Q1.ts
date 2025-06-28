class Students{
    name: string
    studentId: number
    grade : string
    address : string

    constructor(name:string,studentId:number,grade:string,address:string){
        this.studentId=studentId
        this.name=name
        this.grade=grade
        this.address =address
    }
    displayInfo(): void{
        console.log(this.name+" "+this.studentId+" "+this.grade+" "+this.address);
    }
}

const a = new Students("tejas",1,"A","borivali")
a.displayInfo();