var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};

var w = 20;

function setup() {
    createCanvas(1000, 900);
    frameRate(3);
}

function draw() {  
    for (var x = 0; x <= width; x+= 40) {
        for (var y = 0; y <=height; y+= 40) {
        var r = random(255);
        var g = random(255);
        var b = random(255);
        fill(r, g, b);
        strokeWeight(5);
        ellipse(x, y, w, w);
    }
    
}

}

