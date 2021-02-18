var music;
var player;
var edges;
var gameState = "flying";

var box1, box2, box3, box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,500,100,20);
    box1.shapeColor = "blue";

    box2 = createSprite(300,500,100,20);
    box2.shapeColor = "red";

    box3 = createSprite(500,500,100,20);
    box3.shapeColor = "yellow";

    box4 = createSprite(700,500,100,20);
    box4.shapeColor = "green";


    //create box sprite and give velocity

    player = createSprite(400,300, 50,50);
    player.shapeColor = "white";
    player.velocityY = -4//random(-10,10);
    player.velocityX = -8//random(-10,10);
}

function draw() {
    background('black');
    //create edgeSprite
    edges = createEdgeSprites();
    player.bounceOff(edges);

    
    //add condition to check if box touching surface and make it box
    // player.bounceOff(box1);
    // player.bounceOff(box2);
    // player.bounceOff(box3);
    // player.bounceOff(box4);
    
        
                
       



    checkIsTouching();
    drawSprites();
}




function checkIsTouching(){

    if(player.isTouching(box3) && (player.bounceOff(box3))){
        
        player.shapeColor = 'aqua';
        music.play();
    }

    if(player.isTouching(box1) && (player.bounceOff(box1))){
        
        player.shapeColor = 'aqua';
    }

    if(player.isTouching(box2) && (player.bounceOff(box2))){
        
        player.shapeColor = 'red';
        player.velocityY=0;
        player.velocityX=0;
        music.stop();
    }

    if(player.isTouching(box4) && (player.bounceOff(box4))){
        
        player.shapeColor = 'aqua';
    }

}
