var Students = /** @class */ (function () {
    function Students(name, studentId, grade, address) {
        this.studentId = studentId;
        this.name = name;
        this.grade = grade;
        this.address = address;
    }
    Students.prototype.displayInfo = function () {
        console.log(this.name + " " + this.studentId + " " + this.grade + " " + this.address);
    };
    return Students;
}());
var a = new Students("tejas", 1, "A", "borivali");
a.displayInfo();
