var Course = /** @class */ (function () {
    function Course(courseName, courseCode, instructor) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.instructor = instructor;
    }
    return Course;
}());
var a = new Course("maths", 25, "Aditya");
