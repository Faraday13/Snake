 // Количество строк матрицы
 // Количество столбцов матрицы
var MATRIXID = 'm1'; // ID матрицы
var SQUAREROW = 1; // Позицыя игрока (строка)
var SQUARECOL = 3; // Позиция игрока (столбец)
var SPEED = 150;

var CELLHEIGHT; // Высота ячейки (по умолчанию 19px)
var CELLWIDTH; // Ширина ячейки (по умолчанию 19px)
var BORDERTYPE; // Тип рамок таблицы (по умолчанию solid)
var BORDERSIZE; // Размер рамок таблицы (по умолчанию 1px)
var BORDERCOLOR; // Цвет рамок таблицы (по умолчанию black)
$('#start').click (function () {
    var MATRIXROWS = Number($('#rows').val()) || 20;
    var MATRIXCOLLS = Number($('#cols').val()) || 20;
    var LEVEL = Number($('#level').val()) || 1;
    if (LEVEL >((MATRIXROWS * MATRIXCOLLS) - 2)){
        alert( 'Для данной таблицы уровень сложности не может быть выше ' + ((MATRIXROWS * MATRIXCOLLS) - 2));
    }
    var matrix1 = new Matrix(MATRIXROWS, MATRIXCOLLS, MATRIXID);
    var game1 = new GameKernel(matrix1, square1, MATRIXROWS, MATRIXCOLLS, MATRIXID, LEVEL);
    var square1 = new Square(SQUAREROW, SQUARECOL, MATRIXROWS, MATRIXCOLLS, game1);
    matrix1.createMatrix();
    matrix1.setStyle();
    square1.createSquare();
    square1.setDirection();
    game1.setWalls();
    game1.setFood();
    setInterval(square1.move.bind(square1), SPEED);
    });