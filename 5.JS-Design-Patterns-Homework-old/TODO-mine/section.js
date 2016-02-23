var Section = (function () {
    var count = 1;
    function Section(title){
        if (!title) {
            throw new Error('The title of a section cannot be empty.');
        }
        this._title = title;
        //this._counter = 1;
        this._id = "section#" + count;
    }

    Section.prototype.addToDOM = function(containerId){
        var section = document.createElement('section');
        section.setAttribute("id", this._id);

        var title = document.createElement('h2');
        title.innerHTML = this._title;

        var div  =  document.createElement('div');
        div.id = "addItemDiv";

        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Add Item...';
        input.name = 'addItem';
        input.id = '#' + this._id;

        var button = document.createElement('button');
        button.innerHTML = '+';
        button.id = 'addItemButton';
        button.addEventListener("click", addItem, true);

        div.appendChild(input);
        div.appendChild(button);
        section.appendChild(title);
        section.appendChild(div);

        var container = document.getElementById(containerId);
        var addSectionDiv = container.lastChild;
        container.insertBefore(section, addSectionDiv);

        count++;

        function addItem(){
            try {
                var itemContent = input.value;
                var item = new Item(itemContent);
                item.addToDOM(this._id);
            } catch (ex){
                console.log(ex);
            }
        }
    };

    return Section;
})();
