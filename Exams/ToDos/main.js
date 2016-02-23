(function (todo) {
    var container;
        container = todo.getContainer("Monday TODO List");
        container.addToDOM();

    var container2;
        container2 = todo.getContainer("Friday TODO List");
    container2.addToDOM();

}(todo));

