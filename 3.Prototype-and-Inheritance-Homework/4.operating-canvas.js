var operatingCanvas = (function() {
    var shapes = [];
    function drawAndListShapes(canvasId, listId, selectId) {
        addShapeToArray(selectId);
        drawShapes(canvasId);
        createShapesList(listId);
    }

    function drawShapes(canvasId) {
        clearCanvas(canvasId);
        var count = shapes.length - 1;
        for (var i = count; i >= 0; i--) {
            shapes[i].draw(canvasId);
        };
    }

    function clearCanvas(canvasId){
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function addShapeToArray(selectId) {
        var shapeType = document.getElementById(selectId).value;

        switch(shapeType) {
            case 'point':
                shapes.unshift(createPoint());
                break;
            case 'segment':
                shapes.unshift(createSegment());
                break;
            case 'triangle':
                shapes.unshift(createTriangle());
                break;
            case 'rectangle':
                shapes.unshift(createRectangle());
                break;
            case 'circle':
                shapes.unshift(createCircle());
                break;
            default:
                break;
        }
    }

    function createPoint() {
        var color,
            x1,
            y1,
            point;
        color = document.getElementById('color').value;
        x1 = document.getElementById('x1').value;
        y1 = document.getElementById('y1').value;
        point = new Shape.Point(color, x1, y1);

        return point;
    }

    function createSegment() {
        var color,
            x1,
            y1,
            x2,
            y2,
            segment;
        color = document.getElementById('color').value;
        x1 = document.getElementById('x1').value;
        y1 = document.getElementById('y1').value;
        x2 = document.getElementById('x2').value;
        y2 = document.getElementById('y2').value;
        segment = new Shape.Segment(color, x1, y1, x2, y2);

        return segment;
    }

    function createTriangle() {
        var color,
            x1,
            y1,
            x2,
            y2,
            x3,
            y3,
            triangle;
        color = document.getElementById('color').value;
        x1 = document.getElementById('x1').value;
        y1 = document.getElementById('y1').value;
        x2 = document.getElementById('x2').value;
        y2 = document.getElementById('y2').value;
        x3 = document.getElementById('x3').value;
        y3 = document.getElementById('y3').value;
        triangle = new Shape.Triangle(color, x1, y1, x2, y2, x3, y3);

        return triangle;
    }

    function createRectangle() {
        var color,
            x1,
            y1,
            width,
            height,
            rectangle;
        color = document.getElementById('color').value;
        x1 = document.getElementById('x1').value;
        y1 = document.getElementById('y1').value;
        width = document.getElementById('width').value;
        height = document.getElementById('height').value;
        rectangle = new Shape.Rectangle(color, x1, y1, width, height);

        return rectangle;
    }

    function createCircle() {
        var color,
            x1,
            y1,
            radius,
            circle;
        color = document.getElementById('color').value;
        x1 = document.getElementById('x1').value;
        y1 = document.getElementById('y1').value;
        radius = document.getElementById('radius').value;
        circle = new Shape.Circle(color, x1, y1, radius);

        return circle;
    }

    function createShapesList(listId, selectedIndex) {
        var list = document.getElementById(listId);
        list.innerHTML = '';
        for (var i = 0; i  < shapes.length; i ++) {
            var shapeElement = document.createElement('option');
            shapeElement.setAttribute('value', i);
            if (selectedIndex != undefined && selectedIndex === i) {
                shapeElement.setAttribute('selected', 'selected');
            };

            shapeElement.innerHTML = shapes[i].toString();
            list.appendChild(shapeElement);
        };
    }

    function removeShape(canvasId, listId) {
        var index = parseInt(document.getElementById(listId).value);
        shapes.splice(index, 1);

        drawShapes(canvasId);
        createShapesList(listId);
    }

    function moveShapeUp(canvasId, listId) {
        var index,
            shape;
        index = parseInt(document.getElementById(listId).value);
        if (index === 0) {
            return;
        };

        shape = shapes[index - 1];
        shapes[index - 1] = shapes[index];
        shapes[index] = shape;

        drawShapes(canvasId);
        createShapesList(listId, index - 1);
    }

    function moveShapeDown(canvasId, listId) {
        var index,
            shape;
        index = parseInt(document.getElementById(listId).value);
        if (index === shapes.length - 1) {
            return;
        };

        shape = shapes[index + 1];
        shapes[index + 1] = shapes[index];
        shapes[index] = shape;

        drawShapes(canvasId);
        createShapesList(listId, index + 1);
    }

    return {
        drawAndListShapes: drawAndListShapes,
        moveShapeUp: moveShapeUp,
        moveShapeDown: moveShapeDown,
        removeShape: removeShape
    };
})();

document.getElementById('add').addEventListener('click', function() {
    operatingCanvas.drawAndListShapes('canvas', 'list', 'shape');
} );

document.getElementById('up').addEventListener('click', function() {
    operatingCanvas.moveShapeUp('canvas', 'list');
});

document.getElementById('down').addEventListener('click', function() {
    operatingCanvas.moveShapeDown('canvas', 'list');
});

document.getElementById('remove').addEventListener('click', function() {
    operatingCanvas.removeShape('canvas', 'list');
});