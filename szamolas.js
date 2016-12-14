var b = (Math.random() * 10) + 5;
var a;
do {
    a = (Math.random() * b) + 1;
} while (a == b)
var c = Math.floor((Math.random() * 8));

function Globe(weight) {
    this.weight = weight;
}

function getThreeGlobesWeight(x1, x2, x3) {
    return x1.weight + x2.weight + x3.weight;
}

function getTwoGlobesWeight(x1, x2) {
    return x1.weight + x2.weight;
}

var cs = [];

function start() {
    globes = [];
    for (var i = 0; i < 8; ++i) {
        if (i == c) {
            globes[i] = new Globe(b);
        } else {
            globes[i] = new Globe(a);
        }
    }
    cs[0] = getThreeGlobesWeight(globes[1], globes[0], globes[2]);
    cs[2] = getTwoGlobesWeight(globes[6], globes[7]);
    cs[1] = getThreeGlobesWeight(globes[5], globes[4], globes[3]);
}


function getThebiggest() {
    for (var i = 0; i < Math.floor(8 / 3) - 1; ++i) {
        if (cs[i] < cs[i + 1]) {

        }
    }
}