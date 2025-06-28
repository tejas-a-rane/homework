var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var Students = /** @class */ (function () {
    function Students(name, studentId) {
        this.studentId = studentId;
        this.name = name;
    }
    return Students;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.studentList = [];
        return _this;
    }
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
    };
    School.prototype.getInstitutionType = function () {
        console.log("School");
    };
    School.prototype.removeStudent = function (student, id) {
        this.studentList = this.studentList.filter(function (student) {
            return student.studentId != id;
        });
    };
    School.prototype.showStudentList = function () {
        console.log(this.studentList);
    };
    return School;
}(Institute));
var s1 = new Students("tejas", 1);
var s2 = new Students("shinde", 2);
var s3 = new Students("patil", 3);
var s4 = new Students("kevil", 4);
var sc = new School();
sc.getInstitutionType();
sc.addStudent(s1);
sc.addStudent(s2);
sc.addStudent(s3);
sc.addStudent(s4);
sc.showStudentList();
sc.removeStudent(s1, 1);
sc.showStudentList();
