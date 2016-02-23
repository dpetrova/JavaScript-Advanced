(function () {
    require.config({
        paths: {
            'extensions': 'helpers/extensions',
            'container': 'models/container',
            'section': 'models/section',
            'item': 'models/item',
            'factory': 'factory'
        }
    })
})();

require(['factory'], function(Factory){
    var container,
        section,
        item;
    container = new Factory.Container('Monday TODO List');
    section = new Factory.Section('Shopping');
    item = new Factory.Item('Toilet paper');

    container.addToDOM();

    var parent = document.getElementsByClassName('wrapper')[0];
    section.addToDOM(parent.lastChild);

});