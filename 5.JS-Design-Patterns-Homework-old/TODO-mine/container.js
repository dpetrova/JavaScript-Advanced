var Container = (function () {
    var count = 1;
    function Container(title){
        //this._counter = 1;
        this._id = "container#" + count;
        this._title = title;
    }

    Container.prototype.addToDOM = function(){
        var form = document.createElement('form');
        form.setAttribute("id", this._id);

        var title = document.createElement('h1');
        title.innerHTML = this._title;

        var div  =  document.createElement('div');
        div.id = "addSectionDiv";

        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Title...';
        input.name = 'addSection';

        var button = document.createElement('button');
        button.innerHTML = 'New Section';
        button.id = 'addSectionButton';
        button.addEventListener("click", addSection, true);

        div.appendChild(input);
        div.appendChild(button);
        form.appendChild(title);
        form.appendChild(div);
        document.body.appendChild(form);

        count++;

        function addSection(){
            try {
                var sectionTitle = input.value;
                var section = new Section(sectionTitle);
                section.addToDOM(this._id);
            } catch (ex){
                console.log(ex);
            }
        }
    };

    return Container;
})();

