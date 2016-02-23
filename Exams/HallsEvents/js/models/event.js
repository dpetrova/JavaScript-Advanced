var app = app || {};

(function (eventsSystem) {
    function Event(options){
        if (this.constructor.name === 'Event') {
            throw new Error('Cannot instantiate abstract class');
        }

        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);

    }

    Event.prototype.setTitle = function setTitle(title){
        if (!isValidString(title)) {
            throw new Error("Only letters and whitespace are allowed.");
        }
        return this._title = title;
    };

    Event.prototype.getTitle = function getTitle(){
        return this._title;
    };

    Event.prototype.setType = function setType(type){
        if (!isValidString(type)) {
            throw new Error("Only letters and whitespace are allowed.");
        }
        return this._type = type;
    };

    Event.prototype.getType = function getType(){
        return this._type;
    };

    Event.prototype.setDuration = function setDuration(duration){
        if (!isNumeric(duration)) {
            throw new Error("Only digits are allowed.");
        }
        return this._duration = duration;
    };

    Event.prototype.getDuration = function getDuration(){
        return this._duration;
    };

    Event.prototype.setDate = function setDate(date){
        if (!isDate(date)) {
            throw new Error("Only Date instances are allowed.");
        }
        return this._date = date;
    };

    Event.prototype.getDate = function getDate(){
        return this._date;
    };


    eventsSystem.event = Event;

}(app));

