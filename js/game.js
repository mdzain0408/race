class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
           car1 = createSprite(100,200);
           car1.addImage(car12)
           car2 = createSprite(300,200);
           car2.addImage(car24);
           car3 = createSprite(500,200);
           car3.addImage(car36)
           car4 = createSprite(700,200);
           car4.addImage(car48)

           cars = [car1,car2,car3,car4];



    }
  
    play(){
      form.hide();



      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInformation();
  
      if(allPlayers !== undefined){

           background(rgb(198,135,103))
           image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
           var index = 0;
           var x = 208;
           var y = 0;


        var display_position = 130;
        for(var plr in allPlayers){
            console.log(plr)
            index++;
            x = x+220;
            y = displayHeight - allPlayers[plr].distance;
            cars[index - 1].x = x;
            cars[index-1].y = y;

             if(index === player.index){

                cars[index - 1].shapeColor = "red"

                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;






             }

             drawSprites();
        
        }

    }



  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }

if (player.distance>4300){

gameState = 2;


}


    }

end(){

console.log("Game-End")




}

  }

  
  