var database,playerCount,gameState=0
var player,form,game

function setup(){
    createCanvas(500,500);
    
    database=firebase.database();
    game= new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
   
}

