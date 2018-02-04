function GameKernel(matrixObjectName, squareObjectName, matrixRows, matrixCols, matrixId, level)
{
    this.id = matrixId;
    this.rows = matrixRows;
    this.cols = matrixCols;
    this.level = level;
    this.count = 0;
    //Возвращает значение ячейки в зависимости от класса
    this.getCell = function (row, col) {
        var check;
        switch ($('#' + this.id + '_' + row + '_' + col).attr('class')){
            case 'cell player':
                check = 0;
                break;
            case 'cell':
                check = 1;
                break;
            case 'cell wall':
                check = 2;
                break;
            case 'cell food':
                check = 3;
                break;
        }
        return check;
    };
    this.setWalls = function()
    {
       var row = Math.floor(Math.random() * (this.rows - 1 + 1)) + 1;
       var col = Math.floor(Math.random() * (this.cols - 1 + 1)) + 1;
       $('#' + this.id + '_' + row + '_' + col).addClass('wall');
    };
    this.setFood = function ()
    {
        var row = Math.floor(Math.random() * (this.rows - 1 + 1)) + 1;
        var col = Math.floor(Math.random() * (this.cols - 1 + 1)) + 1;
        $('#' + this.id + '_' + row + '_' + col).addClass('food');
    };
    this.food = function (row, col) {
        $('#' + this.id + '_' + row + '_' + col).removeClass('food');
        this.count++;
        for(var i = 0; i < this.level; i++){
            this.setWalls();
        }
        this.setFood();
    };
    this.collision = function (row, col) {
        $('#' + this.id + '_' + row + '_' + col);
        alert('Вы закончили игру набрав ' + this.count + ' очков');
        location.reload(true);
    };
    this.setPlayer = function (row, col, check){
        var cell = '#' + this.id + '_' + row + '_' + col;
        switch (check){
            case 0:
                $(cell).removeClass('player');
                break;
            case 1:
                $(cell).addClass('player');
                break;
        }
    };
}