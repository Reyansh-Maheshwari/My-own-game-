var bg, bgImg;
var Spaceship, Spaceship_img
var laser,laser_img
var meteor, meteor_img
var meteorGroup
var laserGroup;
var GameOver, GameOver_img
var heart1, heart2, heart3
var heart1_img,heart2_img,heart3_img

function preload(){
    heart1_img = loadImage("images/Heart.png")
    heart2_img = loadImage("images/Heart.png")
    heart3_img = loadImage("images/Heart.png")
    
    laser_img = loadImage("images/beams.png")
    meteor_img = loadImage("images/Meteors.png")
    
    bgImg = loadImage("images/Space.png")
    Spaceship_img = loadImage("Spaceship.png")
    GameOver_img = loadImage("Game Over.png")

}
function setup(){
    createCanvas(windowWidth, windowHeight)

    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 3




}
function draw(){
    
    text(mouseX+","+mouseY,mouseX,mouseY)
    drawSprites()
}
