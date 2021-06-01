

var bg,bgIMG;
var diver,diverIMG;
var pearl,pearlIMG;
var shark,sharkIMG;
var coral,coralIMG;

function preload(){
bgIMG=loadImage("ocean1.jpg");
diverIMG=loadImage("man.png");
pearlIMG=loadImage("pearl1.png")
sharkIMG=loadImage("shark.png")
coralIMG=loadImage("coral.png")
}

function setup(){
  createCanvas(1200,800);
bg=createSprite(0,0);
bg.addImage(bgIMG);
bg.scale=5;

diver=createSprite(1000,700);
diver.addImage(diverIMG);
diver.scale=0.7;

createEdgeSprites();

shark=createSprite(70,50,50,70);
shark.addImage(sharkIMG);
shark.scale=2;


coral=createSprite(10,750,50,70);
coral.addImage(coralIMG);
coral.scale=3;
}



function draw(){
  background("blue");
  bg.velocityX=3;
  console.log(bg.x);
  if(bg.x>1000){
    bg.x=300;
  }

  if(keyIsDown(LEFT_ARROW)){
    diver.x=diver.x-20;
  }
  if(keyIsDown(UP_ARROW)){
    diver.y=diver.y-20;
  }

  if(keyIsDown(DOWN_ARROW)){
    diver.y=diver.y+20;
  }
diver.bounceOff;
  
shark.velocityX=1.5;
shark.velocityY=1;

  spawnPearl();
drawSprites();

}


function spawnPearl(){
  if(frameCount%200===0){
    pearl=createSprite(600,700,10,20);
    pearl.addImage(pearlIMG);
pearl.scale=0.1;

pearl.velocityX=3;
pearl.y=Math.round(random(500,800));
  }
}
