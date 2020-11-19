var ball;
var position,database;
var gameState = 0;
var form,playerCount,game,player,allPlayers;
var car1,car2,car3,car4,cars;
var track,car1,car2,car3,car4,ground

function preload(){
track = loadImage("images/track.jpg")
car12 = loadImage("images/car1.png")
car24 = loadImage("images/car2.png")
car36 = loadImage("images/car3.png")
car48 = loadImage("images/car4.png")
ground = loadImage("images/ground.png")
}



function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight-30);

   game = new Game();
   game.getState();
   game.start();
   
    
  
    

}











function draw(){
    background("white");
    
    if(playerCount === 2){

  game.update(1);


    }


    if(gameState === 1){

game.play();

    }

    if(gameState === 2){


game.end();

    }

   
}

