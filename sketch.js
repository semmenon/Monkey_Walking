
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score
var ground

function preload(){
  
  
  monkey_running =       
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

  
  
  
  
  
 
}



function setup() {
  createCanvas (600,600)
  ground = createSprite (300,550,600,20)
  monkey = createSprite (80,500,20,20)
  monkey.addAnimation ("monkey", monkey_running)
  monkey.scale = 0.2
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
  

  
}


function draw() {
  background ("pink")
  ground.velocityX = -10
  
  if (ground.x > 0){
    ground.x = ground.width/2
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  

  drawSprites();
  
  spawnObstacles ();
  spawnBanana ();
  
  
  
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(800,530,10,40);
   obstacle.velocityX = -6 
   
   

      obstacle.addImage(obstacleImage);


   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.25;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

function spawnBanana() {
  //write code here to spawn the bananas
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,50,40,10);
    banana.y = Math.round(random(180,380));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}






