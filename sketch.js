
var background, backgroundImg;

var snow = []

function preload(){
   backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  background = createSprite(400, 200, 50, 50);
  background.addAnimation("bg", backgroundImg);
}

function draw() {
  
  drawSprites();
}