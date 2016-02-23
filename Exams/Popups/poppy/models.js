if(!Function.prototype.extends){
    Function.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}

var poppy = poppy || {};

(function(scope) {

    var Popups = (function () {
        function Popups(title, message, position, type, autoHide, closeButton, timeout, callback) {
            this._popupData = {
                'title': title,
                'message': message,
                'position': position,
                'type': type,
                'autoHide': autoHide || false,
                'timeout': timeout,
                'closeButton': closeButton || false,
                'callback': callback
            }
        }

        return Popups;
    })();


    var Success = (function () {
        function Success(title, message) {
            Popups.call(this, title, message, 'bottomLeft', 'success', false, false); //the 2 last (timeout, callback) are not passed
        }

        Success.extends(Popups);

        return Success;
    })();


    var Info = (function () {
        function Info(title, message) {
            Popups.call(this, title, message, 'topLeft', 'info', false, true); //the 2 last (timeout, callback) are not passed
        }

        Info.extends(Popups);

        return Info;
    })();


    var Error = (function () {
        function Error(title, message) {
            Popups.call(this, title, message, 'topRight', 'error', true, false, 3000); //the last (callback) is not passed
        }

        Error.extends(Popups);

        return Error;
    })();


    var Warning = (function () {
        function Warning(title, message, callback) {
            Popups.call(this, title, message, 'bottomRight', 'warning', false, false, 0, callback);
        }

        Warning.extends(Popups);

        return Warning;
    })();


    scope._models = {
        Success: Success,
        Info: Info,
        Error: Error,
        Warning: Warning
    }

}(poppy));