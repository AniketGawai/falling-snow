  
  const Engine = Matter.Engine
  const World = Matter.World
  const Bodies = Matter.Bodies;

var snow = [];
var ground;

function preload(){
  backgroundImage = loadImage("snow1.jpg")
  girlImg = loadAnimation("girl1.jpeg","girl2.jpeg","girl3.jpeg");
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 //createSprite(400, 200, 50, 50);
  girl = createSprite(700,200,60,60);
  girl.addAnimation("walking",girlImg) 
  girl.velocityX = - 02;

}

function draw() {
  background(backgroundImage);  

  Engine.update(engine);
  
  if(frameCount%20===0){
    snow.push(new Snow(random(0,800),10,10));
}
for(i = 0; i<snow.length; i++ ){
  snow[i].display();

}

 
drawSprites();

//ground.display();
}