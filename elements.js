    a_canvas = document.getElementById("a");
    context = a_canvas.getContext("2d");

    function Me(a_canvas, context) {
        this.man = {
            setPos: function(posx, posy) {
                this.posx = posx;
                this.posy = posy;
            },
            color: "yellow",
            draw: function() {
                context.strokeStyle = 'black';

                //body
                context.beginPath();
                context.lineWidth = 10;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy);
                context.lineTo(this.posx, this.posy + 50);
                context.stroke();

                //leg right
                context.beginPath();
                context.lineWidth = 10;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 50);
                context.lineTo(this.posx - 20, this.posy + 100);
                context.stroke();

                //leg left
                context.beginPath();
                context.lineWidth = 10;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 50);
                context.lineTo(this.posx + 20, this.posy + 100);
                context.stroke();

                //hand right
                context.beginPath();
                context.lineWidth = 10;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 25);
                context.lineTo(this.posx - 20, this.posy + 50);
                context.stroke();

                //hand left
                context.beginPath();
                context.lineWidth = 10;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 25);
                context.lineTo(this.posx + 20, this.posy + 50);
                context.stroke();

                //head
                context.fillStyle = this.color;
                context.beginPath();
                context.arc(this.posx, this.posy, 20, 0, 2 * Math.PI);
                context.closePath();
                context.fill();
                context.lineWidth = 2;
                context.stroke();

                //eye
                context.fillStyle = 'black';
                context.beginPath();
                context.arc(this.posx + 10, this.posy - 5, 3, 0, 2 * Math.PI);
                context.closePath();
                context.fill();

                //hat
                context.beginPath();
                context.arc(this.posx, this.posy - 10, 20, Math.PI, 2 * Math.PI);
                context.closePath();
                context.fill();

                //mouth
                context.beginPath();
                context.lineWidth = 5;
                context.lineCap = "round";
                context.moveTo(this.posx + 5, this.posy + 5);
                context.bezierCurveTo(this.posx + 5, this.posy + 10, this.posx + 5, this.posy + 10, this.posx + 14, this.posy + 11);
                context.stroke();
            },
            deleteLast: function() {

                //body
                context.beginPath();
                context.strokeStyle = 'white';
                context.lineWidth = 12;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy);
                context.lineTo(this.posx, this.posy + 50);
                context.stroke();

                //leg right
                context.beginPath();
                context.lineWidth = 13;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 50);
                context.lineTo(this.posx - 20, this.posy + 100);
                context.stroke();

                //leg left
                context.beginPath();
                context.lineWidth = 13;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 50);
                context.lineTo(this.posx + 20, this.posy + 100);
                context.stroke();

                //hand right
                context.beginPath();
                context.lineWidth = 13;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 25);
                context.lineTo(this.posx - 20, this.posy + 50);
                context.stroke();

                //hand left
                context.beginPath();
                context.lineWidth = 13;
                context.lineCap = "round";
                context.moveTo(this.posx, this.posy + 25);
                context.lineTo(this.posx + 20, this.posy + 50);
                context.stroke();

                //head
                context.fillStyle = "white";
                context.beginPath();
                context.arc(this.posx, this.posy, 22, 0, 2 * Math.PI);
                context.closePath();
                context.fill();

                //hat
                context.beginPath();
                context.arc(this.posx, this.posy - 10, 22, Math.PI, 2 * Math.PI);
                context.closePath();
                context.fill();
            },
            goToRight: function() {
                width = a_canvas.width;
                height = a_canvas.height;
                if (this.posx < width) {
                    this.deleteLast();
                    this.setPos(this.posx + 20, this.posy);
                    this.draw();
                } else {
                    this.deleteLast();
                    this.setPos(0, this.posy);
                    this.draw();
                }
            },

            goToLeft: function() {
                width = a_canvas.width;
                height = a_canvas.height;
                if (this.posx > 0) {
                    this.deleteLast();
                    this.setPos(this.posx - 20, this.posy);
                    this.draw();
                } else {
                    this.deleteLast();
                    this.setPos(height, this.posy);
                    this.draw();
                }
            },

            goToDown: function() {
                width = a_canvas.width;
                height = a_canvas.height;
                if (this.posy < height) {
                    this.deleteLast();
                    this.setPos(this.posx, this.posy + 20);
                    this.draw();
                } else {
                    this.deleteLast();
                    this.setPos(this.posx, 0);
                    this.draw();
                }
            },

            goToUp: function() {
                width = a_canvas.width;
                height = a_canvas.height;
                if (this.posy > 0) {
                    this.deleteLast();
                    this.setPos(this.posx, this.posy - 20);
                    this.draw();
                } else {
                    this.deleteLast();
                    this.setPos(this.posx, height);
                    this.draw();
                }
            },

        };
    }