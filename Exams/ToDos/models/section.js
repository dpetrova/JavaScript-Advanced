
var todo = todo || {};

(function (scope) {
    var counter = 0;
    function Section(title){
        this.id = ++counter;
        this.title = title;
        this.items = [];
    }

    Section.prototype.createDOM = function createDOM(){
        var _this = this,
            outerDiv = document.createElement('div'),
            innerDiv = document.createElement('div'),
            h2 = document.createElement('h2'),
            button = document.createElement('button'),
            input = document.createElement('input');

        outerDiv.setAttribute('id', 'section-' + _this.id);
        outerDiv.className = 'sections';
        h2.innerHTML = _this.title;
        button.innerHTML = '+';
        button.name = 'addItemButton';

        button.addEventListener('click', function(){
            var parent = event.target.parentNode,
                content = parent.querySelector('input[name=itemName]').value,
                item = todo.getItem(content);
                item.addToDOM(parent);
                _this.items.push(item);
        });
        input.type = 'text';
        input.placeholder = 'Add item...';
        input.required = 'required';
        input.name = 'itemName';

        innerDiv.appendChild(input);
        innerDiv.appendChild(button);
        outerDiv.appendChild(h2);
        outerDiv.appendChild(innerDiv);

        return outerDiv;
    };

    Section.prototype.addToDOM = function addToDOM(parent){
        var section = this.createDOM(),
            inputField = parent.lastChild.previousSibling;
        parent.insertBefore(section, inputField);
    };

    scope.getSection =  function (title) {
        return new Section(title);
    }

})(todo);