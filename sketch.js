const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var backgroundImg, fondo;
var rabd, ataque;

var engine, world;

function preload(){
    backgroundImg = loadImage("images/grancañon.png")
    }

 function setup(){
var canvas = createCanvas(1000,1000);
engine = Engine.create();
world = engine.world;

fondo = createSprite(500,500)
fondo.addImage ("fondo",backgroundImg);
fondo.velocityY = -1

rabd = new Rabd (100,100)
ataque = new Ataque (100,100)


 }

 function draw(){
   background(backgroundImg);
   Engine.update(engine);
   rabd.display();
   ataque.display();

   drawSprites();
   
  


 }
