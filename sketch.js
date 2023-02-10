var bg, bgImg
var bottomGround
var topGround
var balloon, balloongImg
var birdImg, bird, birdsGroup
var planeImg, plane, planesGroup
var starImg, star, starsGroup

function preload(){
  bgImg = loadImage("bg.png")
  balloonImg = loadAnimation("balloon1.png", "balloon2.png", "balloon3.png")
  birdImg = loadAnimation("BlueBird.gif")
  planeImg = loadImage("plane.png")
  starImg = loadImage("star.png")

}

function setup() 
{
  createCanvas(500,700);
  bg = createSprite(165,485,1,1)
  bg.addImage(bgImg)
  bg.scale = 1.3

  bottomGround = createSprite(200,390,800,20)
  bottomGround.visible = false

  topGround = createSprite(200,10,800,20)
  topGround.visible = false

  balloon = createSprite(100,200,50,50)
  balloon.addAnimation("balloon", balloonImg)
  balloon.scale = 0.4 

  bird = createSprite(200,200,30,30)
  bird.addAnimation("bird", birdImg)
  bird.scale= 0.5
  
  

  star = createSprite (250,200, 30,30)
  star.addImage(starImg)
  star.scale = 0.1

  planesGroup = createGroup()
  birdsGroup = createGroup()
  starsGroup = createGroup()
  
}

function planes(){
if(frameCount%100===0){
  plane = createSprite(500,Math.round(random(100,500)))
  plane.velocityX = -5
  plane.addImage(planeImg)
  plane.scale = 0.3
  planesGroup.add(plane)
}
}




function draw() 
{
  background(51);

  if(keyDown("space")){
    balloon.velocityY = -6
  }
  balloon.velocityY = balloon.velocityY+2

  if(keyDown("left")){
    balloon.x-= 4
  }
  if(keyDown("right")){
    balloon.x += 4
  }

 
  

 drawSprites()
 planes()
   
}