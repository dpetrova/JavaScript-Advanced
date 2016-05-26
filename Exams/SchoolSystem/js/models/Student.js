var app = app || {};

(function (schoolSystem) {
    function Student(name) {
        schoolSystem.Human.call(this, name);
        this._grades = [];
    }

    Student.extends(schoolSystem.Human);

    Student.prototype.getGrades = function getGrades(){
        return this._grades;
    };

    Student.prototype.addGrade = function addGrade(grade){
        if(!(grade instanceof schoolSystem.Grade)){
            throw new ArgumentException('Grade instances');
        }
        this._grades.push(grade);
    };

    schoolSystem.Student = Student;
}(app));
