function killing(){

  if(khiladi.index===1){

    if(player1.bulletGroup.isTuching(invisibleOject)){
      player1.bulletGroup.destroyEach();
      if(khiladi.health>0){
        khiladi.health-=10;
      }else{
        khiladi.health=-1;
      }

      if(khiladi.health<0){
      plr1k +=1;

      database.ref("players/player1").update({

          kills:plr1k

      })
      }


    }
  }function killing(){

    if(khiladi.index===1){
    if(player1.bulletGroup.isTouching(player2.body)){
  
      player1.bulletGroup.destroyEach();
  
      if(player2.health>0){
      player2.health = player2.health -10;
      }else{
        player2.health = -1;
      }
      
      if(player2.health<0||player2.health===0){
        player1.kills = player1.kills+1;
      }
      khiladi.kill();
  
    }
  
    if(player1.bulletGroup.isTouching(player3.body)){
  
      player1.bulletGroup.destroyEach();
  
      if(player3.health>0){
        player3.health -= 10;
      }else{
        player3.health = -2;
      }
  
      if(player3.health<0){
        player1.kills += 1;
      }
      khiladi.kill();
    }
  
    if(player1.bulletGroup.isTouching(player4.body)){
  
      player1.bulletGroup.destroyEach();
      
      if(player4.health>0){
        player4.health -= 10;
      }else{
        player4.health = -2;
      }
  
      if(player4.health<0){
        player1.kills += 1;
      }
      khiladi.kill();
    }}

    //////////////////////////////////////////////////

    if(khiladi.index===2){
    if(player2.bulletGroup.isTouching(player1.body)){
  
      player2.bulletGroup.destroyEach();
  
      if(player1.health>0){
      player1.health = player1.health -10;
      }else{
        player1.health = -1;
      }
      
      if(player1.health<0||player1.health===0){
        player2.kills = player2.kills+1;
      }
      khiladi.kill();
  
    }
  
    if(player2.bulletGroup.isTouching(player3.body)){
  
      player2.bulletGroup.destroyEach();
  
      if(player3.health>0){
        player3.health -= 10;
      }else{
        player3.health = -2;
      }
  
      if(player3.health<0){
        player2.kills += 1;
      }
      khiladi.kill();
    }
  
    if(player2.bulletGroup.isTouching(player4.body)){
  
      player2.bulletGroup.destroyEach();
      
      if(player4.health>0){
        player4.health -= 10;
      }else{
        player4.health = -2;
      }
  
      if(player4.health<0){
        player2.kills += 1;
      }
      khiladi.kill();
    }}

    /////////////////////////////////////////////////////////

    if(khiladi.index===3){
        if(player3.bulletGroup.isTouching(player2.body)){
      
          player3.bulletGroup.destroyEach();
      
          if(player2.health>0){
          player2.health = player2.health -10;
          }else{
            player2.health = -1;
          }
          
          if(player2.health<0||player2.health===0){
            player3.kills = player1.kills+1;
          }
          khiladi.kill();
      
        }
      
        if(player3.bulletGroup.isTouching(player1.body)){
      
          player3.bulletGroup.destroyEach();
      
          if(player1.health>0){
            player1.health -= 10;
          }else{
            player1.health = -2;
          }
      
          if(player1.health<0){
            player3.kills += 1;
          }
          khiladi.kill();
        }
      
        if(player3.bulletGroup.isTouching(player4.body)){
      
          player3.bulletGroup.destroyEach();
          
          if(player4.health>0){
            player4.health -= 10;
          }else{
            player4.health = -2;
          }
      
          if(player4.health<0){
            player3.kills += 1;
          }
          khiladi.kill();
        }}
  
  
  
  
  }

 
}