const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  createSprite(200, 200, 50, 50);

  airSnd = loadSound("air.wav");

  ball = new Ball(600,250,150)
  blower = new Blower(600,400,150,150);
  blowerMouth = new BlowerMouth(425,450,200,20)

  button = createButton("Click to Blow");
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background(0,0,0);  
  ball.display();
  blower.display();
  blowerMouth.display();
  drawSprites();
}

function blow()
{
  Body.applyForce(ball,{x:0,y:0},{x:0,y:1})
  airSnd.play();
}