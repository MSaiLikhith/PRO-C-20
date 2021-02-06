var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 100, 25, 25);
  wall=createSprite(1500,200,60,200);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  
  car.velocityX=speed;
  detector();
  drawSprites();
}
function detector(){
if(car.x>1500&&car.x<1560){
  car.shapeColor="red";
  car.velocityX=0;
  
}
}