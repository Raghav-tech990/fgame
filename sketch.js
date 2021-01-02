

var player,track,ground,enemy,enemy2
var trackImage,groundImage,playerImage
var distance=0
var obstacle

function preload(){
trackImage=loadImage("Image/track.jpg")

playerImage=loadImage("Image/car3.png")
}

function setup(){
createCanvas(displayWidth-10,displayHeight-20)
player=createSprite(600,350,30,30)
player.addImage(playerImage)
enemy=createSprite(300,300,30,30)
enemy.shapeColor="red"
enemy2=createSprite(800,390,30,30)

}

function draw(){
background("white")
image(trackImage,0,-displayHeight*50,displayWidth,displayHeight*51)

if(keyDown(LEFT_ARROW)){
    player.x=player.x-5
    //player.velocityY=0
    }
   if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5
    
 }
        if(keyDown(UP_ARROW)){
     distance=distance+15
    player.y=displayHeight-distance
    camera.x=displayWidth/2
    camera.y=player.y
    enemy.velocityY=-10
    enemy2.velocityY=-10
}
obstacles()   
                
drawSprites()
}
 function obstacles(){
if (frameCount%60===0){
obstacle=createSprite(400,300,60,60)
obstacle.x=Math.round(random(200,800))
obstacle.y=Math.round(random(displayHeight,displayHeight-distance))
obstacle.shapeColor="green"
}
}