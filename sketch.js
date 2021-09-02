var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  function createapples() {
  apple = createSprite(random(50,350), 40 ,10,10)
  apple.addImage(appleImg)
  apple.scale=.1
  apple.velocityY=-3;}
  
  function createleaf() { 
  leaf = createSprite(random(50,370), 40 ,10,10)
  leaf.addImage(leafImg)
  leaf.scale=.1
  leaf.velocityY=-3;}

  


  
  

   
  
  
  
  
  drawSprites();
}