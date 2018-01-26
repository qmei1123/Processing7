var lin = {
    stroke: 0
}

var w = 20;

function setup() {
    createCanvas(1000, 900);
    frameRate(10);
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
    lin = line(mouseX, mouseY, mouseX, cos(mouseX));
        lin.stroke(r, g, b);
}

}

function roundFive(mouseX)
{
    return (mouseX % 5) >= 2.5 ? parseInt(mouseX / 5) * 5 + 5 : parseInt(mouseX / 5) * 5;
}
