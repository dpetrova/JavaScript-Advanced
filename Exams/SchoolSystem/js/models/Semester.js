var app = app || {};

(function (schoolSystem) {
    function Semester(name){
        this.setName(name);
    }

    Semester.prototype.getName = function getName(){
        return this._name;
    };

    Semester.prototype.setName = function setName(name){
        if(!isValidString(name)){
            throw new ArgumentException('letters and whitespaces');
        }
        this._name = name;
    };

    schoolSystem.Semester = Semester;
}(app));
