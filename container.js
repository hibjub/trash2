class Container {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            'friction':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options)
      this.width = width
      this.height = height
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world,this.body)
    }
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, -50, 100, 100);
      pop();
    }
  }