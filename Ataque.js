class Ataque {
    constructor (x,y){
        var options = {
            'density': 1.5,
            'friction': 1.0,
            'restitution': 0.5
    };
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 200;
    this.height = 200;
    this.image = loadImage ("images/ataque.png");
    World.add(world, this.body);
   };

display (){
   var pos = this.body.position;
   pos.x = 100;
   pos.y = 650;

   push();
   translate(pos.x,pos.y);
   imageMode(CENTER);
   image(this.image, 0,0, this.width, this.height);
   pop();
};
};