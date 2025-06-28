var Students = /** @class */ (function () {
    function Students(name, studentId) {
        this.studentId = studentId;
        this.name = name;
    }
    return Students;
}());
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
        School.totalStudents++;
    };
    School.prototype.showCount = function () {
        console.log(School.totalStudents);
    };
    School.totalStudents = 0;
    return School;
}());
var s = new Students("tejas", 1);
var s1 = new Students("shinde", 2);
var a = new School();
a.addStudent(s);
a.addStudent(s1);
a.showCount();
