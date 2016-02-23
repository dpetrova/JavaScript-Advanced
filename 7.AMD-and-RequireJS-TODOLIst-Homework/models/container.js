define(['section'], function(Section){
    return (function () {
        var counter = 0;
        function Container(title){
            this.id = ++counter;
            this.title = title;
            this.sections = [];
        }

        Container.prototype.createDOM = function createDOM(){
            var _this = this,//to set this not to be event target, but Container
                outerDiv = document.createElement('div'),
                innerDiv = document.createElement('div'),
                h1 = document.createElement('h1'),
                button = document.createElement('button'),
                input = document.createElement('input');

            outerDiv.setAttribute('id', 'container-' + _this.id);
            outerDiv.setAttribute('class', 'wrapper');
            h1.innerHTML = _this.title;

            button.innerHTML = 'New Section';
            button.addEventListener('click', function(){
                var parent = event.target.parentNode, //event is the button been clicked
                    title = parent.querySelector('input[name=sectionName]').value,
                    section = new Section(title);
                section.addToDOM(parent);
                _this.sections.push(section);
            });

            input.type = 'text';
            input.placeholder = 'Title...';
            input.required = 'required';
            input.name = 'sectionName';

            innerDiv.appendChild(input);
            innerDiv.appendChild(button);
            outerDiv.appendChild(h1);
            outerDiv.appendChild(innerDiv);

            return outerDiv;
        };

        Container.prototype.addToDOM = function addToDOM(){
            var container = this.createDOM();
            document.body.appendChild(container);
        };


        return Container;

    })();

});







