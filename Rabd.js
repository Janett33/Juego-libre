class Rabd {
    constructor(x,y) {
        var options = {
            'density': 1.5,
            'friction': 1.0,
            'restitution': 0.5
     };

     this.body = Bodies.rectangle(x,y,50,50,options);
     this.width = 300;
     this.height = 300;
     this.image = loadImage ("images/RABD.png");
     World.add(world, this.body);
    };

display (){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = 100;

    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image, 0,0, this.width, this.height);
    pop();
};
};