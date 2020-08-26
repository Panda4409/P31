function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

    ground = new Ground(600, height, 800, 480);
    division1 = new Division(250, height, 5, 75);
    division2 = new Division(330, height, 5, 75);
    division3 = new Division(410, height, 5, 75);
    division4 = new Division(490, height, 5, 75);
    division5 = new Division(570, height, 5, 75);
    division6 = new Division(650, height, 5, 75);
    division7 = new Division(730, height, 5, 75);
}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;



function draw() {
    background(255, 255, 255);  

    ground.display();

    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 175));
    }

    for (var j = -10; j <= width - 20; j = j + 50) {
        plinkos.push(new Plinko(j, 275));
    }

    for (var j = - 35; j <= width - 30; j = j + 50) {
        plinkos.push(new Plinko(j, 375));
    }

    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
    }

    for (var j = 0; j < pariticles.length; j++) {
        particles[j].display();
    }

    for (var k = 0; k < divisions.length; k++) {
       divisions[k].display();
    }

    for (var n = 0; n < plinkos.length; n++) {
       plinkos[n].display();
    }

  drawSprites();
}