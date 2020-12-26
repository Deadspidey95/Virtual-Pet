//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database;

function preload()
{
  dog = loadImage ("Dog.png")
  happyDog = loadImage("happydog.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog1 = createSprite(250, 300, 150, 150)
  dog1.addImage(dog) 
  dog1.scale = 0.15
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

 
}


function draw() {  
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)){
    writeStock (foodS);
    dog1.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  text("Press Up Arrow Key To Feed Drago Milk")
  textSize(30)
  fill("red")
  stroke(10)


}

function readStock(data){
  foodS = data.val();
}
 
function writeStock(x){
  if(x <= 0){
    x = 0
  } else {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


