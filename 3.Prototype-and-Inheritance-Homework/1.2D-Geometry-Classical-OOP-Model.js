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
    var Point = (function(){
        function Point(x, y){
            this._x = x;
            this._y = y;
        }

        Point.prototype.toString = function(){
            return "X: " + this._x + ", Y: " + this._y;
        };

        return Point;
    })();

//define an abstract class Shape:
    var Shape = (function(){
        function Shape(x, y, color){
            this._point = new Point(x, y);
            this._color = color;
        }

        Shape.prototype.toString = function(){
            return this.constructor.name + " - " + this._point.toString() + ", Color: " + this._color;
        };

        return Shape;
    })();

//var shape = new Shape(1, 1, "#212226");
//console.log(shape.toString());

//define a class Circle:
    var Circle = (function(){
        function Circle(x, y, radius, color){
            Shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function(){
            return Shape.prototype.toString.call(this) + ", Radius: " + this._radius;
        };

        return Circle;
    })();

//var circle = new Circle(1, 1, 6, "#31f095");
//console.log(circle.toString());

//define a class Rectangle:
    var Rectangle = (function(){
        function Rectangle(x, y, width, height, color){
            Shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function(){
            return Shape.prototype.toString.call(this) + ", Width: " + this._width + ", Height: " + this._height;
        };

        return Rectangle;
    })();

//var rectangle = new Rectangle(1, 1, 3, 8, "#dcb39c");
//console.log(rectangle.toString());

//define a class Triangle:
    var Triangle = (function(){
        function Triangle(x1, y1, x2, y2, x3, y3, color){
            Shape.call(this, x1, y1, color);
            this._secondPoint = new Point(x2, y2);
            this._thirsPoint = new Point(x3, y3);
        }

        Triangle.extends(Shape);

        Triangle.prototype.toString = function(){
            return Shape.prototype.toString.call(this) + ", Point2: (" + this._secondPoint.toString() + "), Point3: (" + this._thirsPoint.toString() + ")";
        };

        return Triangle;
    })();

//var triangle = new Triangle(1, 1, 3, 8, 4, 7, "#d3f156");
//console.log(triangle.toString());

//define a class Line:
    var Line = (function(){
        function Line(x1, y1, x2, y2, color){
            Shape.call(this, x1, y1, color);
            this._secondPoint = new Point(x2, y2);
        }

        Line.extends(Shape);

        Line.prototype.toString = function(){
            return Shape.prototype.toString.call(this) + ", Point2: (" + this._secondPoint.toString() + ")";
        };

        return Line;
    })();

//var line = new Line(1, 1, 3, 8, "#580b61");
//console.log(line.toString());

//define a class Segment:
    var Segment = (function(){
        function Segment(x1, y1, x2, y2, color){
            Line.call(this, x1, y1, x2, y2, color);
        }

        Segment.extends(Line);

        Segment.prototype.toString = function(){
            return Line.prototype.toString.call(this);
        };

        return Segment;
    })();

//var segment = new Segment(1, 1, 3, 8, "#2cfccd");
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

var shape = new Geometry.Shape(1, 1, "#212226");
console.log(shape.toString());
var circle = new Geometry.Circle(1, 1, 6, "#31f095");
console.log(circle.toString());
var rectangle = new Geometry.Rectangle(1, 1, 3, 8, "#dcb39c");
console.log(rectangle.toString());
var triangle = new Geometry.Triangle(1, 1, 3, 8, 4, 7, "#d3f156");
console.log(triangle.toString());
var line = new Geometry.Line(1, 1, 3, 8, "#580b61");
console.log(line.toString());
var segment = new Geometry.Segment(1, 1, 3, 8, "#2cfccd");
console.log(segment.toString());