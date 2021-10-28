var plain, plainImg;
var city, cityImg;
var birdImg, bird1Img, bird2Img;
var gameState = SERVE;
var SERVE = 0;
var PLAY = 1;
var END = 2;
var edges;
var plainG;
var birdG, starG, star2G, diamondG;
var starImg, star2Img;
var score = 0;
var start, startImg;
var diamondImg;
var gameOver, gameOverImg;
var sky, skyImg;
var getReady, getReadyImg;
var ufoImg, ufoImg2;
var ufoG, ufo2G;
var missileImg, missileG;
var space, spaceImg;
var next, nextImg;

function preload(){
  
  plainImg = loadImage("plane1.png");
  cityImg = loadImage("city.png");
  birdImg = loadImage("bird2.png");
  bird1Img = loadImage("bird.png");
  bird2Img = loadImage("bird4.png");  
  starImg = loadImage("star.png");
  star2Img = loadImage("star2.png");
  startImg = loadImage("start_icon.png");
  diamondImg = loadImage("diamond.png");
  gameOverImg = loadImage("gameOver.png");
  skyImg = loadImage("background.png");
  getReadyImg = loadImage("getReady.png");
  ufoImg = loadImage("ufo.png");
  ufo2Img = loadImage("ufo2.png");
  missileImg = loadImage("bullet.png");
  spaceImg = loadImage("space.png");
  nextImg = loadImage("Next.png");
  
  
}

function setup(){
  createCanvas(800,800);  
  
  birdG = new Group();
  starG = new Group();
  star2G = new Group();
  plainG = new Group();
  diamondG = new Group();
  ufoG = new Group();
  ufo2G = new Group();
  missileG = new Group(); 

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

  getReady = createSprite(400,325,10,10);
  getReady.addImage(getReadyImg);
  getReady.visible = false;
  getReady.scale = 0.7;
  
  sky = createSprite(400,400,10,10);
  sky.addImage(skyImg);
  sky.scale = 2;
  sky.visible = false;
  
  space = createSprite(380,777,10,10);
  space.addImage(spaceImg);
  space.scale = 0.25;
  
  next = createSprite(750,760,10,10);
  next.addImage(nextImg);
  next.scale = 0.2;
  next.visible = false;
}

function draw(){
  background(0);
  edges = createEdgeSprites();
  
  start.visible = true;
  city.visible = false;
  plain.visible = false;

if(mousePressedOver(start)){
  gameState = SERVE;
  plain.y = 50;
  score = 0;
}


  
  
  if(gameState === PLAY){
  
    gameOver.visible = false;
    city.visible = true;
    plain.visible = true;
    sky.visible = false;
    getReady.visible = false;
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
