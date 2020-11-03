var balloon,balloon_image,back,background1,balloon2,balloon2_image,
balloon3,balloon3_image,balloon4,balloon4_image,bow,boe_image,arrow,arrow_img,arrowGroup,score;

var balloonGroup,balloon2Group,balloon3Group;

var play=12;
var end=15;
var gamestate=play;

var inviline;

function preload(){
 //load your images here 
 balloon_image=loadImage("red_balloon0.png");
 back=loadAnimation("background0.png"); 
 balloon2_image=loadImage("pink_balloon0.png"); 
 balloon3_image=loadImage("blue_balloon0.png");
 balloon4_image=loadImage("green_balloon0.png") 
  bow_image=loadAnimation("bow0.png");
  arrow_img=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  background(180);
  
  //create ballon
  background1=createSprite(300,300,600,600);
  background1.addAnimation("back",back);
  background1.scale=2;
  
  bow=createSprite(500,300,20,20);
  bow.addAnimation("bow",bow_image);
  
  score=0;
  
  balloonGroup=createGroup();
  balloon2Group=createGroup();
  balloon3Group=createGroup();
  arrowGroup=createGroup();
  
  inviline=createSprite(550,300,2,600);
  inviline.visible=false;
  
}

function draw() {
  
  
 
  background(180);
  
if (gamestate===play){  
  
  spawnArrow();
  
  bow.y=mouseY;
  
  background1.velocityX=-3;
  
  if (background1.x<200){
  background1.x=400;
  }
  
  spawnballoon();
  spawnballoon2();
  spawnballoon3();
  
 if (balloonGroup.isTouching(arrowGroup)){
   balloonGroup.destroyEach();
   score=score+2
  }
  
   if (balloon2Group.isTouching(arrowGroup)){
   balloon2Group.destroyEach();
   score=score+2  
  }
  
   if (balloon3Group.isTouching(arrowGroup)){
   balloon3Group.destroyEach();
   score=score+2  
  }
  
  if (balloonGroup.isTouching(inviline) || balloon2Group.isTouching(inviline) || balloon3Group.isTouching(inviline)){
    gamestate=end;
  }
  
}
  
  drawSprites();
  
  if (gamestate===end){
    bow.visible=false;
    background1.velocityX=0;
    balloon3Group.destroyEach();
    balloon2Group.destroyEach();
    balloonGroup.destroyEach();
  }
  
  textSize(20);
  text("Score: "+score,510,150);
  
}

function spawnArrow(){
  if (keyDown("space")){
  arrow=createSprite(500,bow.y,50,5);
  arrow.Y=bow.y
  arrow.scale=0.25
  arrow.addImage(arrow_img);
  arrow.velocityX=-6;
  arrow.lifetime=100;
  arrowGroup.add(arrow);  
  //arrow.debug=true  
  arrow.setCollider("rectangle",0,0,200,100)  
  } 
}
function spawnballoon(){
  if (frameCount%110===0){
   balloon2=createSprite(50,550,40,40);
   balloon2.scale=0.05;
   balloon2.addImage(balloon_image); 
   balloon2.y=Math.round(random(50,550))    
   balloon2.velocityX=3;
   balloon2.lifetime=200;
   balloonGroup.add(balloon2); 
  }
}

function spawnballoon2(){
  if (frameCount%150===0){
   balloon3=createSprite(50,550,40,40);
   balloon3.scale=0.05;
   balloon3.addImage(balloon3_image); 
   balloon3.y=Math.round(random(50,550))    
   balloon3.velocityX=3;
   balloon3.lifetime=200;
   balloon2Group.add(balloon3); 
  }
}

function spawnballoon3(){
  if (frameCount%190===0){
   balloon4=createSprite(50,550,40,40);
   balloon4.scale=0.05;
   balloon4.addImage(balloon4_image); 
   balloon4.y=Math.round(random(50,550))    
   balloon4.velocityX=3;
   balloon4.lifetime=200;
   balloon3Group.add(balloon4); 
  }
}