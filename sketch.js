var seaImg,sea
var shipImg1,ship4



function preload(){ 
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-4.png");

 
    ship4 = createSprite(500,1800,200,500);
    ship4.addAnimation("LS",shipImg1);
  
}


function setup(){
  createCanvas(1400,1000);
  
  sea = createSprite(50,180,20,50);
  sea.addAnimation("LHS",seaImg);

  ship4 = createSprite(500,280,20,50);
  ship4.addAnimation("LHS",shipImg1);
  ship4.scale = 0.5
  ship4.velocityX = 0.4
  
  


 
}


function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2
  }

  
  
  drawSprites();
  }


 

