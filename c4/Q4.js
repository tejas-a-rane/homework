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
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.getDetails = function (name, id) {
        this.name = name;
        this.id = id;
        console.log(this.name + " " + this.id);
    };
    Student.prototype.getRole = function () {
        console.log("Student");
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.getDetails = function (name, id) {
        this.name = name;
        this.id = id;
        console.log(this.name + " " + this.id);
    };
    Teacher.prototype.getRole = function () {
        console.log("Teacher");
    };
    return Teacher;
}(Person));
var s1 = new Student();
s1.getDetails("tj", 1);
s1.getRole();
var t1 = new Teacher();
t1.getDetails("tejas", 2);
t1.getRole();
