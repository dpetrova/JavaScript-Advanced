/**
 * Created by Daniela on 14/02/2016.
 */
var container =  new Container('Tuesday TODO List');
container.addToDOM();

var section1 = new Section('Shopping List');
section1.addToDOM(container._id);
var item1 = new Item('Pampers');
item1.addToDOM(section1._id);
var item2 = new Item('Toilet paper');
item2.addToDOM(section1._id);

var section2 = new Section('Business');
section2.addToDOM(container._id);
var item3 = new Item('Lunch with board of directors');
item3.addToDOM(section2._id);
var item4 = new Item('Arrange meeting with investors');
item4.addToDOM(section2._id);