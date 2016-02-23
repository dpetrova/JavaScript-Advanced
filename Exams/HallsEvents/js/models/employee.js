var app = app || {};

(function (eventsSystem) {
    function Employee(name, workHours){
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.setName = function setName(name){
        if (!isValidString(name)) {
            throw new Error("Only letters and whitespace are allowed.");
        }
        this._name = name;
    };

    Employee.prototype.getName = function getName(){
        return this._name;
    };

    Employee.prototype.setWorkHours = function setWorkHours(workHours){
        if (!isNumeric(workHours)) {
            throw new Error("Only digits are allowed.");
        }
        this._workHours = workHours;
    };

    Employee.prototype.getWorkhours = function getWorkHours(){
        return this._workHours;
    };


    //eventsSystem._employee = Employee;

    eventsSystem.employee =  Employee;

}(app));