var Students = /** @class */ (function () {
    function Students(name, studentId) {
        this.attendance = 0;
        this.studentId = studentId;
        this.name = name;
    }
    Students.prototype.markAttendance = function () {
        this.attendance++;
    };
    Students.prototype.showAttendance = function () {
        console.log(this.attendance);
    };
    return Students;
}());
var a = new Students("tejas", 1);
a.markAttendance();
a.markAttendance();
a.markAttendance();
a.showAttendance();
