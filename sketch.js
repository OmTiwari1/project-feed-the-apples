var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg
var apple,leaves
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg=loadImage("leaf.png")

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
function createLeaves(){
  leaves=createSprite(random(50,350),40,10,10)
   leaves.addImage(apple.png)
 }
 }
 function createApples(){
   apple=createSprite(random(50,350),40,10,10)
   apple.addImage(apple.png)
 }
 var select_sprites =Math.round(random(1,2));
 if(frameCount%80==0){
   if(select_sprites==1){
     createApples()
   }
   else{
  createLeaves()
   }
 }

function draw() {
  rabbit.x=mouseX
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}