var villano, villanoImg;
var mano, manoImg, chasquido;
var mano2;
var chims, chimsImg;
var gameState = "WAIT";
var cityloop;
var misibola,misilImg;
var laserRed,laserRedImg;
var laserBlue,laserBlueImg;
var vida = 3;


function preload(){
 villanoImg = loadImage("el villano.png");
 manoImg = loadImage("mano.png");
 chimsImg = loadImage("chims.png");
 chasquido = loadAnimation("prechasquido.png","chasquido.png");
 cityloop = loadImage("cityloop.png");
 misilImg = loadImage("misibola.png");
 laserBlueImg = loadImage("laser.png");
 laserBlueImg = loadImage("laserB.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 chims = createSprite(width/8,height/2,40,40);
 chims.addImage(chimsImg);
 chims.scale = 3.5;

 villano=createSprite(width-150,height - (height/3+(height/3)),40,40);
   villano.scale=3;
   villano.addImage(villanoImg);
  
   mano=createSprite(width-320,height - (height/3+(height/4)),40,40);
   mano.scale=3;
   mano.addImage(manoImg);

   mano2=createSprite(width-50,height - (height/3+(height/4)),40,40);
   mano2.scale=3;
   mano2.addImage(manoImg);

   
}

function draw() {
 background(cityloop);
 

 textSize(40);
 fill("black");
 stroke("white");

 

 if (gameState==="WAIT"){

    text("Presiona espacio para Pelear",width/2,height/2);

    if(keyDown("space")){
      gameState="PLAY";
    }
     
 }

 

 if(gameState==="PLAY"){

   text("Vidas: " + vida,100,70);

  attack();

   if(villano.y  < (height/2)){
      villano.velocityY = villano.velocityY + 2;
   }
   

   if(villano.y  > (height/2)){
      villano.velocityY=villano.velocityY - 2;
     }
    
     if(mano.y  > (height/2)){
      mano.velocityY = mano.velocityY - 2;
   }

   if(mano.y  < (height/2)){
      mano.velocityY = mano.velocityY + 2;
   }

   if(mano2.y  > (height/2)){
      mano2.velocityY=mano2.velocityY - 2;
     }


   if(mano2.y  < (height/2)){
      mano2.velocityY=mano2.velocityY + 2;
     }

     if(keyDown("w")){
      chims.y=chims.y-12;
   }

   if(keyDown("s")){
      chims.y=chims.y+12;
   }

   if(keyDown("a")){
      chims.x=chims.x-12;
   }

   if(keyDown("d")){
      chims.x=chims.x+12;

   }

   //if(chims.isTouching(laserRed) && chims.velocityY > 0 && chims.velocityY < 0 && chims.velocityX < 0 && chims.velocityX > 0){
      //vida = vida -1;
    // }
     
    // if(chims.isTouching(laserBlue) && chims.velocityY > 0 && chims.velocityY < 0 && chims.velocityX < 0 && chims.velocityX > 0){
    // vida = vida -1;
   // }

  if(vida===0){
    gameState="END";
  }    
 }

 if (gameState === "END"){
   misibola.destroyEach();
   chims.destroy;
   laserBlue.destroy;
   laserRed.destroy;
   text("Game Over",width/2,height/2);
 }

 drawSprites();
}
  


function attack (){

   if(frameCount % 30===0){
    misibola = createSprite(villano.x,random(100,600));
    misibola.addImage(misilImg);
    misibola.scale = 2;
    misibola.velocityX=Math.round(random(-17,-20,-24,-27,-30));
   }

   if(frameCount % 300===0){

      var seleccion = Math.round(random(1,2));
     
       laserBlue.addImage(laserBlueImg);
       laserRed.addImage(laserRedImg);

       switch(seleccion){
      
       case 1:
       laserRed =createSprite(width,height/2);
       laserRed.scale = 2.2;
       laserRed.velocityX=-32;
       break
      
       case 2:
       laserBlue =createSprite(width,height/2);
       laserBlue.scale = 2.2;
       laserBlue.velocityX=-32;
       break
      }
}

}