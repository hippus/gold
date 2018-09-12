function stopPropagation(e) {
    if (!e) e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}

function toggleDiagram(evt) {
    var diagram = document.getElementsByClassName('diagram')[0];
    diagram.classList.toggle('small');
    var circles = document.getElementsByClassName('circle');
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];
        circle.classList.remove('red', 'black');
        circle.classList.add('white');
    }
    stopPropagation(evt);
}

function toggleColor(square) {
    var circle = square.querySelector('.circle');
    var className = 'white';
    if (circle.classList.contains('white')) {
        className = 'red';
    } else if (circle.classList.contains('red')) {
        className = 'black';
    }
    circle.classList.remove('white', 'red', 'black');
    circle.classList.add(className);
}

function createToggleHandler(square) {
    return function() { toggleColor(square); };
}

function attachEvents() {
    var m = document.getElementsByClassName('m')[0];
    m.addEventListener('click', toggleDiagram, false);
    var squares = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    for (var i = 0; i < squares.length; i++) {
        var elements = document.getElementsByClassName(squares[i]);
        for (var j = 0; j < elements.length; j++) {
            var square = elements[j];
            var handler = createToggleHandler(square);
            square.addEventListener('click', handler, false);
        }
    }
}