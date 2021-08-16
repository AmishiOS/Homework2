var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0){
    if (select_sprites == 1){
      createApples();
    }
    else {
      createLeaves();
    }
  }

  drawSprites();
}

function createApples(){
Apple=createSprite(random(50, 350), 0, 10, 10);
Apple.addImage(appleImg);
Apple.scale=0.07;
Apple.velocityY=3;
Apple.lifetime=100;
}

function createLeaves(){
  Leaf=createSprite(random(50, 350), 0, 10, 10);
  Leaf.addImage(leafImg);
  Leaf.scale=0.07;
  Leaf.velocityY=3;
  Leaf.lifetime=100;
  }