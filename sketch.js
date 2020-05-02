const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var bird, slingShot;
var time = 0;
var count = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);

    bird = new Bird(200,50);
    

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(251,122,39);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    
    bird.display();
    platform.display();
    
    slingshot.display();  
      
   time = time + 1;
    if(time > 500){
        text("GAME OVER",600,200);
        text("LOST",600,150);

}
 console.log(time)
     text ("SCORE:" +count ,600,100);
}
  
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(bird.body,{x:200 , y:50});
         slingshot.attach(bird.body);
         bird.width = bird.width+5;
         bird.height = bird.height+5;
    }
}
