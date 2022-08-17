// fon
var orbitalsBack = [];
var orbitalsFront = [];
var orbitalsAmountBG = 7;
var orbitalsAmountFG = 55;
function setup() {
    var w = document.getElementById('circles').offsetWidth;
    var h = 500;
    var myCanvas = createCanvas(w, h);
    myCanvas.parent("circles");        
    for (var i = 0; i < orbitalsAmountBG; i++) {
        orbitalsBack[i] = new OrbitalBG();
    }
    for (var j = 0; j < orbitalsAmountFG; j++) {
        orbitalsFront[j] = new OrbitalFG();
    }
}
function draw(){
    clear();
    for (var i = 0; i < orbitalsBack.length; i++) {
        orbitalsBack[i].display();
        orbitalsBack[i].update();
        orbitalsBack[i].edges();
    };
    for (var k = 0; k < orbitalsFront.length; k++) {
        orbitalsFront[k].display();
        orbitalsFront[k].update();
        orbitalsFront[k].edges();
    }
}
var speedMin = -10;
var speedMax = 12;
var colorsBG = ["hsl(219, 56%,46%)", "hsl(219, 56%,44%)", "hsl(219, 56%,42%)", "hsl(219, 56%,40%)",    "hsl(219, 56%,38%)", "hsl(219, 56%,36%)", "hsl(219, 56%,34%)", "hsl(219, 56%,32%)",    "hsl(219, 56%,30%)", "hsl(219, 56%,26%)",    "hsl(219, 56%,24%)", "hsl(219, 56%,46%)", "hsl(219, 56%,45%)", "hsl(219, 56%,43%)",    "hsl(219, 56%,41%)", "hsl(219, 56%,39%)", "hsl(219, 56%,37%)", "hsl(219, 56%,35%)", "hsl(219, 56%,33%)", "hsl(219, 56%,31%)", "hsl(219, 56%,27%)", "hsl(219, 56%,25%)"];
var colorsFG = ["hsl(24, 100%,100%)", "hsl(207, 100%,90%)", "hsl(219, 100%,85%)", "hsl(24, 100%,80%)", "hsl(207, 100%,75%)", "hsl(24, 100%,76%)", "hsl(219, 100%,74%)", "hsl(219, 100%,72%)", "hsl(219, 100%,70%)", "hsl(219, 100%,68%)", "hsl(219, 100%,66%)", "hsl(219, 100%,64%)", "hsl(219, 100%,62%)", "hsl(219, 100%,60%)", "hsl(219, 100%,58%)", "hsl(219, 100%,57%)", "hsl(24, 100%,56%)"];    
function OrbitalBG() {
    var radius = round(random(120, 220));
    var filler = colorsBG[int(random(0, colorsBG.length))]
    this.pos = createVector(
    random(0 + 120, width - 120),
    random(0 + 120, height - 120)
    );
    this.vel = createVector(random(speedMin, speedMax) / (radius / 1.75), random(speedMin, speedMax) / (radius / 1.75));
    var orbitPoint = createVector(random(0, width), random(0, height));
    this.update = function() {
        this.acc = p5.Vector.sub(orbitPoint, this.pos);
        this.acc.setMag((this.radius));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    };
    this.display = function() {
        fill(filler);
        noStroke();
        ellipse(this.pos.x, this.pos.y, radius, radius);
    };
    this.edges = function() {
        if(((radius / 2) + this.pos.x) > width) {
            this.vel.x *= -1;
        }
        if(((radius / 2 * -1) + this.pos.x) < 0) {
            this.vel.x *= -1;
        }
        if(((radius / 2) + this.pos.y) > height) {
            this.vel.y *= -1;
        }
        if(((radius / 2 * -1) + this.pos.y) < 0) {
            this.vel.y *= -1;
        }
    };
}
function OrbitalFG() {
    var radius = round(random(4, 100));
    var filler = colorsFG[int(random(0, colorsFG.length))]
    this.pos = createVector(
    random(0 + 98, width - 98),
    random(0 + 98, height - 98)
    );
    this.vel = createVector(random(speedMin, speedMax) / (radius / 2), random(speedMin, speedMax) / (radius / 2));
    var orbitPoint = createVector(random(0, width), random(0, height));
    this.update = function() {
        this.acc = p5.Vector.sub(orbitPoint, this.pos);
        this.acc.setMag((this.radius));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    };
    this.display = function() {
        fill(filler);
        noStroke();
        ellipse(this.pos.x, this.pos.y, radius, radius);
    };
    this.edges = function() {
        if(((radius / 2) + this.pos.x) > width) {
            this.vel.x *= -1;
        }
        if(((radius / 2 * -1) + this.pos.x) < 0) {
            this.vel.x *= -1;
        }
        if(((radius / 2) + this.pos.y) > height) {
            this.vel.y *= -1;
        }
        if(((radius / 2 * -1) + this.pos.y) < 0) {
            this.vel.y *= -1;
        }
    };
}

// Carousel //
const gap = 25;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));