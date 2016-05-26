var app = app || {};

(function (schoolSystem) {
    function Human(name){
        //this will make the class "abstract"
        if(this.constructor === Human) {
            throw new Error('Cannot instantiate abstract class');
        }

        this.setName(name);
    }

    //getters and setters
    Human.prototype.getName = function getName(){
        return this._name;
    };

    Human.prototype.setName = function setName(name){
        if(!isValidString(name)){
            throw new ArgumentException('letters and whitespaces');
        }
        this._name = name;
    };

    schoolSystem.Human = Human;
}(app));
