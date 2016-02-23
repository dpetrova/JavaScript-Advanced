define(['container', 'section', 'item'], function(Container, Section, Item){
    var factory = (function() {
        return {
            Container: Container,
            Section: Section,
            Item: Item
        }
    })();

    return factory;

});






