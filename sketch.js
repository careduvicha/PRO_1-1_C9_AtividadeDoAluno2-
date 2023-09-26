
var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,100,100)
  box.shapeColor="red"
}

function draw() 
{
  background(30);
if (keyIsDown(UP_ARROW)) {
  box.position.y-=5
  background(35)
}
if (keyIsDown(DOWN_ARROW)) {
  box.position.y+=5
  background(87)
}
if (keyIsDown(RIGHT_ARROW)) {
  box.position.x+=5
  background(12)
}
if (keyIsDown(LEFT_ARROW)) {
  box.position.x-=5
  background(57)
}


  drawSprites();

}




