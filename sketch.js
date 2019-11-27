var fixedRect, movingRect;
var radius1 = 50, radius2 = 50;
var collisionDistance, actualDistance, sub1, sub2, sub3;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.setCollider("circle",0,0,radius1);
  movingRect.setCollider("circle",0,0,radius2);
  fixedRect.shapeColor = "orange";
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isInRange(movingRect, fixedRect)) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor ="orange";
  }
  drawSprites();
}
//object1 is the moving object and object2 is the still object
function isInRange(object1, object2) {
  collisionDistance = radius1 + radius2;
  sub1 = object1.x - object2.x;
  sub2 = object1.y - object2.y;
  sub1 = sub1**2;
  sub2 = sub2**2;
  sub3 = sub1 + sub2;
  actualDistance = Math.sqrt(sub3);
  if(actualDistance<=collisionDistance) {
    return true;
  } else {
    return false;
  }
}