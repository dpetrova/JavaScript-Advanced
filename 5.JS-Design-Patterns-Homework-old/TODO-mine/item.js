/**
 * Created by Daniela on 14/02/2016.
 */
var Item = (function () {
    var count = 1;
    function Item(content){
        if (!content) {
            throw new Error('The content of an item cannot be empty.');
        }
        this._content = content;
        //this._status = false;
        //this._counter = 1;
        this._id = "item#" + count;
    }

    Item.prototype.addToDOM = function(sectionId){
        var div = document.createElement('div');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = this._id;
        checkbox.addEventListener("click", itemStatus, false);

        var label = document.createElement('label');
        label.innerHTML = this._content;
        label.htmlFor = checkbox.id;

        div.appendChild(checkbox);
        div.appendChild(label);

        var section = document.getElementById(sectionId);
        var addItemDiv = section.lastChild;
        section.insertBefore(div, addItemDiv);

        count++;

        function itemStatus(){
            if(checkbox.checked){
                div.style.backgroundColor = "lightgreen";
            }else{
                div.style.backgroundColor = "transparent";
            }
        }
    };

    return Item;
})();