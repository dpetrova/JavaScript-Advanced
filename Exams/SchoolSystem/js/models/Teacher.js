var app = app || {};

(function (schoolSystem) {
    function Teacher(name, teachingSubject) {
        schoolSystem.Human.call(this, name);
        this.setTeachingSubject(teachingSubject);
    }

    Teacher.extends(schoolSystem.Human);

    Teacher.prototype.getTeachingSubject = function getTeachingSubject(){
        return this._teachingSubject;
    };

    Teacher.prototype.setTeachingSubject = function setTeachingSubject(teachingSubject){
       if(teachingSubject){
            if(!(schoolSystem.Subject.isValidSubject(teachingSubject))){
                throw new ArgumentException('Subject instances');
            }
        }

        this._teachingSubject = teachingSubject;
    };

    Teacher.prototype.addGradeToStudent = function addGradeToStudent(student, gradeParams){
        if(!(student instanceof schoolSystem.Student)){
            throw new ArgumentException('Student instances');
        }

        if(gradeParams.subject){
            if(!(schoolSystem.Subject.isValidSubject(gradeParams.subject))){
                throw new ArgumentException('Subject instances');
            }
        }

        if(!isNumeric(gradeParams.mark)){
            throw new ArgumentException('number');
        }

        if(!(gradeParams.semester  instanceof schoolSystem.Semester)){
            throw new ArgumentException('Semester instances');
        }

        //todo implement logic
        var grade,
            keys;
        keys = Object.keys(gradeParams);

        if(keys.length < 3){
            grade = new schoolSystem.Grade(gradeParams.mark, this.getTeachingSubject(), gradeParams.semester);
        } else{
            grade = new schoolSystem.Grade(gradeParams.mark, gradeParams.subject, gradeParams.semester);
        }

        student.addGrade(grade);
    };

    schoolSystem.Teacher = Teacher;
}(app));
