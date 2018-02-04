'use strict';
function Matrix(rows, cols, id)
{
    this.rows = rows;
    this.cols = cols;
    this.id = id;
    // Создается родительская таблица и ячейки
    this.createMatrix = function ()
    {
        parent  = $('<div />').attr('class', 'matrix').attr('id', this.id);
        $('body').append(parent);
            var row = 0;
            var col = 0;
        for (var y = 0; y < this.rows; y++) {
            row++;
            if(row > this.rows){
                row = 1;
            }
            for (var x = 0; x < this.cols; x++) {
                col++;
                if (col > this.cols){
                    col = 1;
                }
                var cell = $('<div />')
                    .attr('class', 'cell')
                    .attr('id', this.id + '_' + row + '_' + col);
                $(parent).append(cell);
            }
        }
    };
    // Пользователь задает Стиль таблицы (Опционально)
    this.setStyle = function (cellH, cellW, BrdType, BrdSize, BrdColor)
    {
        var cellHeight = cellH || 19;
        var cellWidth = cellW || 19;
        var BorderSize = BrdSize || 1;
        var BorderColor = BrdColor || '#000000';
        var BorderType = BrdType || 'solid';
        var row = 1;
        var col = 1;
        //Создание стиля для ячеек
        for (var y = 0; y < this.rows; y++) {
            row++;
            if(row > this.rows){
                row = 1;
            }
            for (var x = 0; x < this.cols; x++) {
                col++;
                if (col > this.cols){
                    col = 1;
                }
                $('#' + this.id + '_' + row + '_' + col)
                    .css('width', cellWidth + 'px').css('height',cellHeight + 'px')
                    .css('border-right', BorderType + ' ' + BorderSize + 'px' + ' ' + BorderColor)
                    .css('border-bottom', BorderType + ' ' + BorderSize + 'px' + ' ' + BorderColor)
                    .css('float', 'left');
            }
        }
        // Создание стиля для родительской таблицы
        $('#' + this.id)
            .css('width', (cellWidth + BorderSize) * this.cols + 'px')
            .css('height', (cellHeight + BorderSize) * this.rows + 'px')
            .css('border-top', BorderType + ' ' + BorderSize + 'px' + ' ' + BorderColor)
            .css('border-left', BorderType + ' ' + BorderSize + 'px' + ' ' + BorderColor)
    };
}