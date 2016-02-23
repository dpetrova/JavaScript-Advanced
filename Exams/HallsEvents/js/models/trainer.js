var app = app || {};

(function (eventsSystem) {
    function Trainer(name, workHours){
        eventsSystem.employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(eventsSystem.employee);

    Trainer.prototype.addFeedback = function addFeedback(feedback){
        if(feedback instanceof String){
            this.feedbacks.push(feedback);
        }
    };

    Trainer.prototype.addCourse = function addFeedback(course){
        if(course instanceof eventsSystem.course){
            this.courses.push(course);
        }

    };




    eventsSystem.trainer =  Trainer;

}(app));