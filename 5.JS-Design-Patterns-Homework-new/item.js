var Item = (function () {
    var counter = 0;

    function Item(title) {
        ListElement.call(this, title);
        counter++;
    };

    Item.extends(ListElement);

    Item.prototype.addToDOM = function (target) {
        var target,
            newElement,
            div,
            checkbox,
            innerDiv;

        target = document.getElementById(target);
        newElement = document.createElement("div");
        div = document.createElement('div');
        div.className = "contentBox";

        checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener("click", itemStatus, false);

        innerDiv = document.createElement('div');
        innerDiv.innerHTML = this._title;
        innerDiv.className = "content";
        innerDiv.id = "content" + counter;

        div.appendChild(checkbox);
        div.appendChild(innerDiv);
        newElement.appendChild(div);
        target.appendChild(newElement);

        function itemStatus(){
            if(checkbox.checked){
                div.style.backgroundColor = "lightgreen";
            }else{
                div.style.backgroundColor = "transparent";
            }
        }
    };

    return Item;
}());