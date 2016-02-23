//fixing missing Object.create(…)
if (!Object.create) {
    Object.create = function (proto) {
        function F() {};
        F.prototype = proto;
        return new F();
    };
};

//adding extends() method
if(!Object.prototype.extends){
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}

//module:
var Geometry = (function(){

    //define a class Point:
    var Point = {
        init: function(x, y){
            this._x = x;
            this._y = y;
        },
        toString: function(){
            return "X: " + this._x + ", Y: " + this._y;
        }
    };

//define an abstract class Shape:
    var Shape = {
        init: function(x, y, color){
            this._point = Object.create(Point);
            this._point.init(x, y);
            this._color = color;
        },
        toString: function(){
            return this._point.toString() + ", Color: " + this._color;
        }
    };

//var shape = Object.create(Shape);
//shape.init(1, 1, "#212226");
//console.log(shape.toString());

//define a class Circle:
    var Circle = {
        init: function(x, y, radius, color){
            Shape.init.call(this, x, y, color);
            this._radius = radius;
        },
        toString: function(){
            return "Circle - " + Shape.toString.call(this) + ", Radius: " + this._radius;
        }
    };

//var circle = Object.create(Circle);
//circle.init(1, 1, 6, "#31f095");
//console.log(circle.toString());

//define a class Rectangle:
    var Rectangle = {
        init: function(x, y, width, height, color){
            Shape.init.call(this, x, y, color);
            this._width = width;
            this._height = height;
        },
        toString: function(){
            return "Rectangle - " + Shape.toString.call(this) + ", Width: " + this._width + ", Height: " + this._height;
        }
    };

//var rectangle = Object.create(Rectangle);
//rectangle.init(1, 1, 3, 8, "#dcb39c");
//console.log(rectangle.toString());

//define a class Triangle:
    var Triangle = {
        init: function(x1, y1, x2, y2, x3, y3, color){
            Shape.init.call(this, x1, y1, color);
            this._secondPoint = Object.create(Point);
            this._secondPoint.init(x2, y2);
            this._thirdPoint = Object.create(Point);
            this._thirdPoint.init(x3, y3);
        },
        toString: function(){
            return "Triangle - " + Shape.toString.call(this) + ", Point2: (" + this._secondPoint.toString() + "), Point3: (" + this._thirdPoint.toString() + ")";
        }
    };

//var triangle = Object.create(Triangle);
//triangle.init(1, 1, 3, 8, 4, 7, "#d3f156");
//console.log(triangle.toString());

//define a class Line:
    var Line = {
        init: function(x1, y1, x2, y2, color){
            Shape.init.call(this, x1, y1, color);
            this._secondPoint = Object.create(Point);
            this._secondPoint.init(x2, y2);
        },
        toString: function(){
            return "Line - " + Shape.toString.call(this) + ", Point2: (" + this._secondPoint.toString() + ")";
        }
    };

//var line = Object.create(Line);
//line.init(1, 1, 3, 8, "#580b61");
//console.log(line.toString());

//define a class Segment:
    var Segment = {
        init: function(x1, y1, x2, y2, color){
            Shape.init.call(this, x1, y1, color);
            this._secondPoint = Object.create(Point);
            this._secondPoint.init(x2, y2);
        },
        toString: function(){
            return "Segment - " + Shape.toString.call(this) + ", Point2: (" + this._secondPoint.toString() + ")";
        }
    };

//var segment = Object.create(Segment);
//segment.init(1, 1, 3, 8, "#580b61");
//console.log(segment.toString());

    return {
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Line: Line
    };
})();

var circle = Object.create(Geometry.Circle);
circle.init(1, 1, 6, "#31f095");
console.log(circle.toString());
var rectangle = Object.create(Geometry.Rectangle);
rectangle.init(1, 1, 3, 8, "#dcb39c");
console.log(rectangle.toString());
var triangle = Object.create(Geometry.Triangle);
triangle.init(1, 1, 3, 8, 4, 7, "#d3f156");
console.log(triangle.toString());
var line = Object.create(Geometry.Line);
line.init(1, 1, 3, 8, "#580b61");
console.log(line.toString());
var segment = Object.create(Geometry.Segment);
segment.init(1, 1, 3, 8, "#580b61");
console.log(segment.toString());