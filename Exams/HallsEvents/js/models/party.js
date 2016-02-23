var app = app || {};

(function (eventsSystem) {
    function Party(options){
        eventsSystem.event.call(this, options);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }

    Party.extends(eventsSystem.event);

    Party.prototype.setIsCatered = function setIsCatered(isCatered){
        var bool = Boolean(isCatered);
        this._isCatered  = bool;
    };

    Party.prototype.getIsCatered = function(){
        return this._isCatered;
    };

    Party.prototype.setIsBirthday = function setIsBirthday(isBirthday){
        var bool = Boolean(isBirthday);
        this._isBirthday = bool;
    };

    Party.prototype.getIsBirthday = function getIsBirthday(){
        return this._isBirthday;
    };

    Party.prototype.setOrganiser = function setOrganiser(organiser){
        if (!organiser instanceof eventsSystem.employee) {
            throw new Error("Only Employee instances are allowed.");
        }
        this._organiser = organiser;
    };

    Party.prototype.getOrganiser = function getOrganiser(){
        return this._organiser;
    };


    eventsSystem.party =  Party;

}(app));