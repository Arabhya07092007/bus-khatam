class Player {
    constructor(){

        this.index = null;
        this.name = null;
        this.posX = null;
        this.posY = null;
        this.mousy = null;
        this.direction = null;
        this.firingState = null;
        this.health = 200;
        this.kills = 0;

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){

        database.ref("/").update({
            playerCount: count
        });

    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            index:this.index,
            posX:this.posX,
            posY:this.posY,
            mousy:this.mousy,
            direction:this.direction,
            firingState:this.firingState/*,
            health:this.health,
            kills:this.kills*/

        });
    }

    static getPlayerInfo(){

        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }

    kill(){

     // if(player1!==undefined&&player2!==undefined&&player3!==undefined){
     //  if(khiladi.index===1){
      database.ref("players/player1").update({

          health:player1.health,
          kills:player1.kills

      })//}

    //  if(khiladi.index===2){
      database.ref("players/player2").update({
        health:player2.health,
        kills:player2.kills
      })//}

    //  if(khiladi.index===1){
      database.ref("players/player3").update({
          health:player3.health,
          kills:player3.kills
      })//}

     // if(khiladi.index===1){
      database.ref("players/player4").update({
          health:player4.health,
          kills:player4.kills
      })//}//}

    }



}