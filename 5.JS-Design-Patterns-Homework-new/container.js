var Container = (function () {
    function Container(title, sections) {
        ListElement.call(this, title);
        this._sections = sections;
    };

    Container.extends(ListElement);

    Container.prototype.addSection = function (section) {
        this._sections.push(section);
    };

    Container.prototype.addToDOM = function () {
        var body,
            container,
            title,
            div,
            input,
            button;

        body = document.getElementById("wrapper");
        container = document.createElement('div');
        container.setAttribute("id", "container");

        title = document.createElement('h1');
        title.innerHTML = this._title;

        div  =  document.createElement('div');
        div.id = "sectionContainer";

        input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Title...';
        input.id = 'newSectionField';

        button = document.createElement('button');
        button.innerHTML = 'New Section';
        button.className = 'addNewSection';
        button.setAttribute("onclick", 'addNewSection()');

        container.appendChild(title);
        container.appendChild(div);
        container.appendChild(input);
        container.appendChild(button);
        body.appendChild(container);
    };

    return Container;
}());

