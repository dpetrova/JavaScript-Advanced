var app = app || {};

(function (eventsSystem) {
    function Course(name, numberOfLectures){
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.setName = function setName(name){
        if (!isValidString(name)) {
            throw new Error("Only letters and whitespace are allowed.");
        }
        this._name = name;
    };

    Course.prototype.getName = function getName(){
        return this._name;
    };

    Course.prototype.setNumberOfLectures = function setNumberOfLectures(numberOfLectures){
        if (!isNumeric(numberOfLectures)) {
            throw new Error("Only digits are allowed.");
        }
        this._numberOfLectures = numberOfLectures;
    };

    Course.prototype.getNumberOfLectures = function getNumberOfLectures(){
        return this._numberOfLectures;
    };


    eventsSystem.course =  Course;

}(app));

