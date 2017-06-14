//Відповідає за управління кнопками.

function Keyboard() {
    this.keyPressed = false; //перевіряє чи натиснута кнопка зараз
    return this;
}

Keyboard.prototype = {
    convertCodeToDirection: function(code) {
        switch (code) {
            case 37:
                return 'left';
            case 38:
                return 'up';
            case 39:
                return 'right';
            case 40:
                return 'down';
            default:
                return false;
        }
    },

    keyDown: function(e) {
        var direction = this.convertCodeToDirection(e.keyCode);
        if (direction) {
            Core.Variables.PlayerTank.setDirection(direction);
            this.keyPressed = true;

        }
    },
    keyUp: function(e) {
        //чи натиснута клавіша?
        var direction = this.convertCodeToDirection(e.keyCode);
        if (direction) {
            this.keyPressed = false;
        }
    },
  //press = func
    hookEvent: function() {
        var self = this;
        document.onkeydown = function(e) {
            self.keyDown(e);
        };
        document.onkeyup = function(e) {
            self.keyUp(e);
        };
    }
};
