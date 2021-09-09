var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

ghost = createSprite(300,300,50,50);
ghost.addImage("ghost",ghostImg);
ghost.scale = 0.5;
  

doorsGroup = new Group()
climbersGroup = new Group()
invisibleBlockGroup = new Group()


}

function draw() {
  background(0);
  
  
    if(gameState === "play"){

          if(tower.y > 400){
            tower.y = 300
          }
      
          if(keyDown("left_arrow")){
            ghost.x += -3
          }
          if(keyDown("right_arrow")){
            ghost.x += 3
          }
          if(keyDown("space")){
            ghost.velocityY = -6;
            
          }
          Doors();
          if(invisibleBlockGroup.isTouching(ghost)||ghost.y > 600){
            gameState = "end";
            ghost.destroy();
          }
          drawSprites();
    }
    if(gameState === "end"){
      
    textSize(20)
    stroke("red")
    Fill("red")
      text("gameover",200,250)
      
    }
    
      
   
    
}
function Doors(){
  if(frameCount%250===0){
  door = createSprite(50,50,50,50)
  door.addImage("enter",doorImg);
  door.x = Math.round(random(100,500))
  door.velocityY = 1
  climber = createSprite(50,120,50,50)
  climber.addImage("climb",climberImg);
  climber.x = door.x;
  climber.velocityY = 1;
  door.depth = ghost.depth;
  climber.depth = ghost.depth;
  ghost.depth+=1;
  door.lifetime = 600;
  climber.lifetime = 600;
  invisibleBlock = createSprite(50,130,80,10)
  invisibleBlock.x = climber.x;
  invisibleBlock.velocityY = 1;
  invisibleBlock.lifeTime = 600;
  invisibleBlock.visible = false;
  doorsGroup.add(door);
  invisibleBlockGroup.add(invisibleBlock);
  climbersGroup.add(climber);

  }
}
