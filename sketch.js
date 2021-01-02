
var monkey , monkey_running
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
}


function draw() {

  background(0);
  
  if(ground.x<0){
    
    ground.x = ground.width/2
  }
  
  
  if(keyDown("space")){
    
    monkey.velocityY = -2;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground)
  
  
  
  food();
  obstacles();
  
  drawSprites();
}


function food() {
  
  if (frameCount % 80 === 0){
    
    banana = createSprite(200,200,20,20)
    banana.addImage(bananaImage);
    banana.velocityY = 2;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 100;
    banana.scale = 0.1
  }

  
}

function obstacles(){
  
  if (frameCount % 300 === 0){
    
    obstacle = createSprite(400,200,40,40);
    obstacle.addImage(obstacleImage);
    obstacle.y = Math.round(random(100,300));
    obstacle.lifetime = 100;
    obstacle.scale = 0.2
    obstacle.velocityY = 3;
    
  }
  
  
}



