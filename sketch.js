var plain, plainImg;
var city, cityImg;
var birdImg, bird1Img, bird2Img;
var edges;

function preload(){
  
  plainImg = loadImage("plane1.png");
  cityImg = loadImage("city.png");
  birdImg = loadImage("bird2.png");
  bird1Img = loadImage("bird.png");
  bird2Img = loadImage("bird4.png");
  
  
}

function setup(){
  createCanvas(800,800); 

  city = createSprite(400,400,0,0);
  city.addImage(cityImg);
  city.velocityX = 0;
  city.scale = 2;
  
  plain = createSprite(20,mouseY,0,0);
  plain.addImage(plainImg);
  plain.scale = 0.35;

}

function draw(){
  background(0);
  edges = createEdgeSprites();
  
  plain.collide(edges);
  
  bird();

  drawSprites();

  }

function bird(){
  if(frameCount%100===0){
  var bird = createSprite(850,0,10,10);
  bird.lifetime = -1;
  bird.velocityX = -4;
  bird.y = Math.round(random(10,750));
  
  var rand = Math.round(random(1,3))
    switch(rand){
      case 1: bird.addImage(birdImg);
      bird.scale = 0.25;
      break;
      
      case 2: bird.addImage(bird1Img);
      bird.scale = 0.25;
      break;  
        
      case 3: bird.addImage(bird2Img);    
      bird.scale = 0.25;
      break;
        
      default:break;
    }
    
  
  }
}
