var canvas,surface1,surface2,surface3,surface4,box,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(850,600);

    //create 4 different surfaces
    surface1 = createSprite(110,575,200,30);
    surface1.shapeColor = "darkBlue";

    surface2 = createSprite(320,575,200,30);
    surface2.shapeColor = "orange";

    surface3 = createSprite(530,575,200,30);
    surface3.shapeColor = rgb(154,0,63);

    surface4 = createSprite(740,575,200,30);
    surface4.shapeColor = "darkGreen";

    //create box sprite and give velocity
    box = createSprite(random(20,780),300,50,50);   
    box.shapeColor = "white";
    box.setVelocity(6,4); 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "darkBlue";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "orange";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = rgb(154,0,63);
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "darkGreen";
    }

    drawSprites()
}
