function addNewItem(target, inputId) {
    var content,
        newItem;

    content = document.getElementById(inputId).value;
    newItem = new Item(content);
    newItem.addToDOM(target);
};

function addNewSection() {
    var title,
        newSection;

    title = document.getElementById("newSectionField").value;
    newSection = new Section(title);
    newSection.addToDOM();
};
