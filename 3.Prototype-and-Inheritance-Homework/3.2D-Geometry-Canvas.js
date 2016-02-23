//adding extends() method
if(!Object.prototype.extends){
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}


var Geometry = (function(){
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

    var Shape = (function(){
        function Shape(x, y, color){
            this._point = new Point(x, y);
            this._color = color;
        }

        Shape.prototype.toString = function(){
            return this.constructor.name + " - " + this._point.toString() + ", Color: " + this._color;
        };

        Shape.prototype.initializeCanvas = function(){
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = this._color;
            ctx.lineWidth = 1;
            ctx.strokeStyle = this._color;
            return ctx;
        };

        return Shape;
    })();

    var Circle = (function(){
        function Circle(x, y, radius, color){
            Shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function(){
            return Shape.prototype.toString.call(this) + ", Radius: " + this._radius;
        };

        Circle.prototype.draw = function () {
            var ctx =  Shape.prototype.initializeCanvas.call(this);
            ctx.arc(this._point._x, this._point._x, this._radius, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
        };

        return Circle;
    })();

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

        Rectangle.prototype.draw = function () {
            var ctx =  Shape.prototype.initializeCanvas.call(this);
            ctx.fillRect(this._point._x, this._point._y, this._width, this._height);
            ctx.closePath();
        };

        return Rectangle;
    })();



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

        Triangle.prototype.draw = function () {
            var ctx =  Shape.prototype.initializeCanvas.call(this);
            ctx.moveTo(this._point._x, this._point._y);
            ctx.lineTo(this._secondPoint._x, this._secondPoint._y);
            ctx.lineTo(this._thirsPoint._x, this._thirsPoint._y);
            ctx.fill();
            ctx.closePath();
        };

        return Triangle;
    })();

    var Line = (function(){
        function Line(x1, y1, x2, y2, color){
            Shape.call(this, x1, y1, color);
            this._secondPoint = new Point(x2, y2);
        }

        Line.extends(Shape);

        Line.prototype.toString = function(){
            return Shape.prototype.toString.call(this) + ", Point2: (" + this._secondPoint.toString() + ")";
        };

        Line.prototype.draw = function () {
            var ctx =  Shape.prototype.initializeCanvas.call(this);
            ctx.moveTo(this._point._x, this._point._y);
            ctx.lineTo(this._secondPoint._x, this._secondPoint._y);
            ctx.stroke();
            ctx.closePath();
        };

        return Line;
    })();

    var Segment = (function(){
        function Segment(x1, y1, x2, y2, color){
            Line.call(this, x1, y1, x2, y2, color);
        }

        Segment.extends(Line);

        Segment.prototype.toString = function(){
            return Line.prototype.toString.call(this);
        };

        Segment.prototype.draw = function () {
            Line.prototype.draw.call(this);
        };

        return Segment;
    })();

    return {
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Segment: Segment,
        Line: Line
    };
})();

var rectangle = new Geometry.Rectangle(150, 150, 120, 80, "#dcb39c5");
rectangle.draw();
var circle = new Geometry.Circle(100, 100, 40, "#31f095");
circle.draw();
var triangle = new Geometry.Triangle(300, 300, 400, 450, 210, 360, "#d3f156");
triangle.draw();
var line = new Geometry.Line(10, 400, 250, 400, "#580b61");
line.draw();
var segment = new Geometry.Segment(10, 350, 150, 450, "#2cfccd");
segment.draw();