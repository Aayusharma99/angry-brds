const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1;
var log1,log2,box3,box4;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,30,50,50);
    box2 = new Box(240,30,50,50);
    box3 = new Box(270,60,50,50);
    box4 = new Box(140,10,50,50);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(20,30);
    log1 = new Log(200,303,20,20,PI/2); 
    log2 = new Log(200,303,40,40,PI/2); 
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
}