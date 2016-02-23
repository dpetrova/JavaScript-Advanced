var app = app || {};

(function (eventsSystem) {
    function Lecture(options){
        eventsSystem.event.call(this, options);
        this.setTrainer(options.trainer);
        this.setCourse(options.course);
    }

    Lecture.extends(eventsSystem.event);

    Lecture.prototype.setTrainer = function setTrainer(trainer){
        if (!trainer instanceof eventsSystem.trainer) {
            throw new Error("Only Trainer instances are allowed.");
        }
        this._trainer = trainer;
    };

    Lecture.prototype.getTrainer = function getTrainer(){
        return this._trainer;
    };

    Lecture.prototype.setCourse = function setCourse(course){
        if (!course instanceof eventsSystem.course) {
            throw new Error("Only Course instances are allowed.");
        }
        this._course = course;
    };

    Lecture.prototype.getCourse = function getCourse(){
        return this._course;
    };


    eventsSystem.lecture =  Lecture;

}(app));