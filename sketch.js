const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var backgroundIMG;

function preload() {
//preload the images here
backgroundIMG=loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);

  engine=Engine.create();
    world=engine.world;
  Engine.run(engine)
  // create sprites here

   Ground=new Ground(200,480);

   hero=new Hero(100,300,1);

   rope=new Fly(hero.body,{x:100, y:50});
}

function draw() {
  background(backgroundIMG);
  Engine.update(engine);

  Ground.display();
  hero.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}