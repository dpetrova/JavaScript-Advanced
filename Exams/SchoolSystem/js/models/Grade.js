var app = app || {};

(function (schoolSystem) {
    function Grade(mark, subject, semester){
        this.setMark(mark);
        this.setSubject(subject);
        this.setSemester(semester);
    }

    Grade.prototype.getMark = function getMark(){
        return this._mark;
    };

    Grade.prototype.setMark = function setMark(mark){
        if(!isNumeric(mark)){
            throw new ArgumentException('number');
        }
        this._mark = mark;
    };

    Grade.prototype.getSubject = function getSubject(){
        return this._subject;
    };

    Grade.prototype.setSubject = function setSubject(subject){
        if(!(schoolSystem.Subject.isValidSubject(subject))){
            throw new ArgumentException('Subject instances');
        }
        this._subject = subject;
    };

    Grade.prototype.getSemester = function getSemester(){
        return this._semester;
    };

    Grade.prototype.setSemester = function setSemester(semester){
        if(!(semester  instanceof schoolSystem.Semester)){
            throw new ArgumentException('Semester instances');
        }
        this._semester = semester;
    };

    schoolSystem.Grade = Grade;
}(app));
