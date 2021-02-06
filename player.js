class Player{
constructor(){}


getCount(){
    database.ref("playerCount").on("value",function(data){
        playerCount=data.val()
    })
}
updateCount(count){
database.ref("playerCount").update({
    "playerCount":count
})
}

update(name){
    var playerIndex="Player"+ playerCount;  
    database.ref(playerIndex).set({
        name:name                     
    })                                   
}
}