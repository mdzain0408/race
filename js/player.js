class Player {
    constructor(){

      this.distance = 0;
      this.name = null;
      this.index = null;

      

    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){

      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getPlayerInformation(){
    var playerInfo  = database.ref('players'); 
    playerInfo.on("value",(data)=>{

      allPlayers = data.val();

    })


    }

  }