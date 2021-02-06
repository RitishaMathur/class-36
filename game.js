class Game{
    constructor(){}
    
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val() //variable
        })
    }

    updateState(state){   //updateState(1)
        database.ref("/").update({
        'gameState':state //firebase
        })
    }
    start(){
        if(gameState===0){
            player=new Player();
            form=new Form();
            player.getCount();
            form.display();
        }
    }
}