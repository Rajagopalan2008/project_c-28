const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImage,ground,boy,boyImage, stone, stoneImage,mango1;

function preload(){
	treeImage=loadImage("sprites/tree.png");
    boyImage=loadImage("sprites/boy.png");
    stoneImage = loadImage("sprites/stone.png")
}

function setup() {
	createCanvas(800, 600);

  //stone options:
  var stone_options={
    isStatic : false,
    restitution : 0,
    friction : 1,
    density : 1.02
  }

	engine = Engine.create();
	world = engine.world;

 //to create the tree
 tree = createSprite(550,350,20,20);
 tree.addImage("tree",treeImage);
 tree.scale=0.44;

 tree=Bodies.rectangle(550,150,100,100);
 World.add(world,tree);

 //to create the Ground
 ground = createSprite(400,590,825,20);
 ground.shapeColor="brown";

 ground = Bodies.rectangle(400, 590, 825, 10 , {isStatic:true} );
 World.add(world, ground);

 //to create the boy
 boy = createSprite(100,535,50,50);
 boy.addImage("boy",boyImage);
 boy.scale=0.10;

 boy = Bodies.rectangle(100,535,50,100);
 World.add(world,boy);

 //to create the stone
 stone = createSprite(50,480,20,20);
 stone.addImage("stone",stoneImage);
 stone.scale=0.05;

 stone=Bodies.circle(50,480,20,stone_options);
 World.add(world,stone);

 //to create the mangoes
 mango1=new mango(250,250,50);

	Engine.run(engine);
  
}


function draw() {
  background("orange");
  Engine.update(engine);
  
  drawSprites();

  fill("yellow");
  ellipse(785,20);
}



