var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300, 200);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.5

  doorsgroup = new Group()
  climbersgroup = new Group()
  invisibleBlockgroup = new Group()
}

function draw() {
  background(200);

  if (tower.y > 400) {
    tower.y = 300


  }

  if (keyDown("left_ARROW")) {
    ghost.x = ghost.x - 5
  }
  if (keyDown("right_ARROW")) {
    ghost.x = ghost.x + 5
  }

  if (keyDown("space")) {
    ghost.velocityY = - 5
    //add gravity

  }

  if (doorsgroup.isTouching (ghost) || (ghost.y > 600)) {
ghost.velocityY = 0
climbersgroup.velocityY = 0
doorsgroup.velocityY = 0
tower.velocityY = 0
} 
  ghost.velocityY = ghost.velocityY + 0.2


  spawndoors()
  spawnclimbers()

  drawSprites()
}

function spawndoors() {

  if (frameCount % 260 === 0) {
    door = createSprite(300, -50, 100, 200);
    door.addImage("door", doorImg);
    door.velocityY = 3
    door.x = Math.round(random(120, 380));
    doorsgroup.add(door);

  }


}


function spawnclimbers() {
  if (frameCount % 260 == 0) {
    climber = createSprite(300, -50, 100, 200);
    climber.addImage("climber", climberImg);
    climber.velocityY = 3

    climbersgroup.add(climber);
    climber.x = door.x

    var invisibleBlock= createSprite (door.x,door.y,climber.width,climber.height);
invisibleBlock.velocityY = climber.velocityY

invisibleBlock.visible = false;
  }
}


















