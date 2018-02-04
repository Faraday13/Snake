'use strict';
function Square(row, col, matrixRows, matrixCols, gameObjectName){
/*
    Пользователем задается начальная строка и столбец, количество строк и столбцов матрицы,
    имя объекта матрицы для взаимодействия с ним, имя объекта ядра игры для взаимодействия с ним
 */
    this.game = gameObjectName;
    this.mcols = matrixCols;
    this.mrows = matrixRows;
    this.course = {
          x: 1,
          y: 0
      };
    this.body = [{
      x: col - 2,
      y: row
    } , {
      x: col - 1,
      y: row
    }, {
      x: col,
      y: row
    }];
    this.createSquare = function ()
    {
        for (var i = 0; i < this.body.length; i++){
            this.game.setPlayer(this.body[i].y, this.body[i].x,
                this.game.getCell(this.body[i].y, this.body[i].x))
        }
    };
    this.setDirection = function () {
        var self = this;
        $('body').keydown(function(event) {
            switch (event.keyCode){
                case 38: // Вверх
                    if(self.course.y === 1){
                        self.course = {y: 1, x: 0};
                    }
                    else {
                        self.course = {y: -1, x: 0};
                    }
                    break;
                case 40: // Вниз
                    if(self.course.y === -1){
                        self.course = {y: -1, x: 0};
                    }
                    else {
                        self.course = {y: 1, x: 0};
                    }
                    break;
                case 37: // Влево
                    if(self.course.x === 1){
                        self.course = {y: 0, x: 1};
                    }
                    else {
                        self.course = {y: 0, x: -1};
                    }
                    break;
                case 39: // Вправо
                    if(self.course.x === -1){
                        self.course = {y: 0, x: -1};
                    }
                    else {
                        self.course = {y: 0, x: 1};
                    }
                    break;
            }
        });
        return self.course;
    };
    this.move = function (){
        var self = this;
        var lastBodyEl = self.body[self.body.length - 1];
        var tail = self.body[0];
        var head = {
            x: lastBodyEl.x + self.course.x,
            y: lastBodyEl.y + self.course.y
        };
        if(head.x > self.mcols){
           head.x -= self.mcols;
        }
        else if(head.x <= 0){
            head.x += self.mcols;
        }
        if (head.y > self.mcols){
            head.y -= self.mrows
        }
        else if(head.y <= 0){
            head.y += self.mrows
        }
        switch (self.game.getCell(head.y, head.x)){
            case 3:
                self.game.food(head.y, head.x);
                break;
            case 2:
                self.game.collision(head.y, head.x);
                break;
            case 0:
                self.game.collision(head.y, head.x);
                break;
            default:
            self.game.setPlayer(tail.y, tail.x, self.game.getCell(tail.y, tail.x));
            self.body.shift();
        }
        self.body.push(head);
        self.game.setPlayer(head.y, head.x, self.game.getCell(head.y, head.x));
    };
}