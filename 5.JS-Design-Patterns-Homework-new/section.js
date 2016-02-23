var Section = (function () {
    var counter = 0;
    function Section(title, items) {
        ListElement.call(this, title);
        this._items = items;
        counter++;
    };

    Section.extends(ListElement);

    Section.prototype.addToDOM = function () {
        var target,
            newElement,
            section,
            title,
            div,
            input,
            button;

        target = document.getElementById("sectionContainer");
        newElement = document.createElement("div");
        section = document.createElement('section');
        section.className = "clearfix";
        section.id = "section" + counter;

        title = document.createElement('h2');
        title.innerHTML = this._title;

        div  =  document.createElement('div');
        div.className = "addItem clearfix";

        input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Add Item...';
        input.id = "newitemfield" + counter;

        button = document.createElement('button');
        button.innerHTML = '+';
        button.className = "addNewItem";
        button.setAttribute("onclick", 'addNewItem(\'section' + counter +'\', \'newitemfield' + counter +'\')');

        div.appendChild(input);
        div.appendChild(button);
        section.appendChild(title);
        newElement.appendChild(section);
        newElement.appendChild(div);
        target.appendChild(newElement);
    };

    Section.prototype.addItem = function (item) {
        this._items.push(item);
    };

    return Section;
}());