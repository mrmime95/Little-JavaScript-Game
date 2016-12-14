document.onkeydown = document.onkeyup = checkKey;
    var map = {};

    function checkKey(e) {
        e = e || window.event;
        map[e.keyCode] = e.type == 'keydown';
        wichKey(map);
    }

    function wichKey(map) {
        for (i in map) {
            if (map[i]) {
                if (i == '38') {
                    // up arrow
                    me.man.goToUp();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '40') {
                    // down arrow
                    me.man.goToDown();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '37') {
                    // left arrow
                    me.man.goToLeft();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '39') {
                    // right arrow
                    me.man.goToRight();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '87') {
                    // w
                    me2.man.goToUp();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '83') {
                    // s
                    me2.man.goToDown();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '65') {
                    // a
                    me2.man.goToLeft();
                    me.man.draw();
                    me2.man.draw();
                } else if (i == '68') {
                    // d
                    me2.man.goToRight();
                    me.man.draw();
                    me2.man.draw();
                }
            }
        }
    }