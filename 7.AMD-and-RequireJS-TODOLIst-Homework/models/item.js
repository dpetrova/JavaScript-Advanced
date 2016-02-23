define([], function(){
    return (function () {
        var counter = 0;
        function Item(content){
            this.id = ++counter;
            this.content = content;
            this.status = false;
        }

        Item.prototype.createDOM = function createDOM(){
            var _this = this,
                div = document.createElement('div'),
                checkbox = document.createElement('input'),
                label = document.createElement('label');

            div.className = 'items';
            checkbox.type = 'checkbox';
            checkbox.id = 'list-item-' + _this.id;
            checkbox.addEventListener('click', function(){
                if (checkbox.checked) {
                    div.style.backgroundColor = 'lightgreen';
                    _this.status = true;
                }
                else {
                    div.style.backgroundColor = 'transparent';
                }
            }, false);
            label.innerHTML = _this.content;

            div.appendChild(checkbox);
            div.appendChild(label);

            return div;
        };

        Item.prototype.addToDOM = function addToDOM(parent) {
            var item = this.createDOM(),
                inputField = parent.lastChild.previousSibling;
            parent.insertBefore(item, inputField);
        };

        return Item;

    })();
});


