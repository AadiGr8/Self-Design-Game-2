var plain, plainImg;
var city, cityImg;
var birdImg, bird1Img, bird2Img;
var gameState = PLAY;
var PLAY = 1;
var END = 2;
var edges;
var bird;
var start, startImg;
var gameOver, gameOverImg;

function preload(){
  
  plainImg = loadImage("plane1.png");
  cityImg = loadImage("city.png");
  birdImg = loadImage("bird2.png");
  bird1Img = loadImage("bird.png");
  bird2Img = loadImage("bird4.png");
  gameOverImg = loadImage("gameOver.png");
  
  
}

function setup(){
  createCanvas(800,800);  
  
  birdG = new Group();

  city = createSprite(400,400,0,0);
  city.addImage(cityImg);
  city.velocityX = 0;
  city.scale = 2;
  
  plain = createSprite(20,350,0,0);
  plain.addImage(plainImg);
  plain.scale = 0.35;
  plainG.add(plain);
  
  start = createSprite(400,400,10,10);
  start.addImage(startImg);
  start.scale = 1.2;

  gameOver = createSprite(400,300,10,10);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
  gameOver.scale = 0.7;

}

function draw(){
  background(0);
  edges = createEdgeSprites();
  
  city.visible = false;
  plain.visible = false;

if(mousePressedOver(start)){
  gameState = PLAY;
  plain.y = 50;
  score = 0;
} 
  
  if(gameState === PLAY){
  
    gameOver.visible = false;
    plain.visible = true;
    city.visible = true;
    start.y = 1000;

    plain.y = mouseY;
  
  
  if(plain.isTouching(birdG)){
    gameState = END;
  }
  
  plain.collide(edges);
  
  bird();

  }

  
  if(gameState === END){
    gameOver.visible = true;
    birdG.destroyEach();
    start.y = 400;

    if(mousePressedOver(start)){
      gameState = PLAY;
      plain.y = 50;
      score = 0;
    }

  }  

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
    
    birdG.add(bird);
  
  }
}
