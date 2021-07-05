var tom,tomImage1,tomImage2,tomImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3;
var bg,bgImage;


function preload(){
    tomImage1=loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3=loadAnimation("images/cat4.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3=loadAnimation("images/mouse4.png");


    bgImage = loadImage("images/garden.png");
    }
function setup (){
  var canvas =  createCanvas(1000,800);

    
    tom=createSprite(750,700);
    tom.addAnimation("tomSleeping",tomImage1);
    tom.scale=(0.2);

    
    mouse=createSprite(200,700);
    mouse.addAnimation("mouseStanding",mouseImage1);
    mouse.scale=(0.14);
    

}

function draw(){
background(bgImage);

if( tom.x - mouse.x <( tom.width - mouse.width)/2){
  
tom.velocityX=0;
tom.addAnimation("tomLastImage",tomImage3);
tom.x=300;
tom.scale=0.2;
tom.changeAnimation("tomLastImage");
mouse.addAnimation("mouseLastImage",mouseImage3);
mouse.scale=0.14;
mouse.changeAnimation("mouseLastImage");
}

drawSprites(); 
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
  tom.velocityX=-5;
  tom.addAnimation("tomRunning",tomImage2);
  tom.changeAnimation("tomRunning");

  mouse.addAnimation("mouseTeasing",mouseImage2);
  mouse.changeAnimation("mouseTeasing");

}

}
