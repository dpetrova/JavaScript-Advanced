/**
 * Created by Daniela on 05/02/2016.
 */
// this program is borrowed from tockata for learning purposes only

var domModule = (function() {
    function appendChild(child, parent) {
        var className,
            parentNode;

        if (parent[0] === ".") {
            className = parent.substr(1);
            parentNode = document.getElementsByClassName(className);
            console.log(parent.substr(1));
            parentNode[0].appendChild(child);
        } else if (parent[0] === "#") {
            parentNode = document.getElementById(parent.substr(1));
            parentNode.appendChild(child);
        }
    }

    function removeChild(parent, child) {
        var parentNode,
            childNode;

        parentNode = document.querySelector(parent);
        childNode = parentNode.querySelector(child);
        parentNode.removeChild(childNode);
    }

    function addHandler(element, eventType, eventHandler) {
        var targetElements,
            eventStr;

        targetElements = document.querySelectorAll(element);
        eventStr = "on" + eventType;
        for (var i = 0; i < targetElements.length; i++) {
            targetElements[i].setAttribute(eventStr, eventHandler);
        }
    }

    function retrieveElements(selector) {
        var elements = document.querySelectorAll(selector);
        return elements;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
})();

var liElement = document.createElement("li");
domModule.appendChild(liElement, ".birds-list");
domModule.removeChild("ul.birds-list","li:first-child");
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!")});

var elements = domModule.retrieveElements(".bird");
for (var i in elements) {
    console.log(elements[i]);
}