var app = app || {};

(function (eventsSystem) {
    function Hall(name, capacity){
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.setName = function setName(name){
        if (!isValidString(name)) {
            throw new Error("Only letters and whitespace are allowed.");
        }
        this._name = name;
    };

    Hall.prototype.getName = function getName(){
        return this._name;
    };

    Hall.prototype.setCapacity = function setCapacity(capacity){
        if (!isNumeric(capacity)) {
            throw new Error("Only digits are allowed.");
        }
        this._capacity = capacity;
    };

    Hall.prototype.getCapacity = function getCapacity(){
        return this._capacity;
    };

    Hall.prototype.addEvent = function addEvent(event){
        if(event instanceof eventsSystem.party){
            this.parties.push(event);
        }else if(event instanceof eventsSystem.lecture){
            this.lectures.push(event);
        }
    };


    eventsSystem.hall =  Hall;

}(app));


