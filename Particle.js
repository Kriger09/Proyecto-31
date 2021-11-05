class Particle {
    constructor(x, y) {
       this.r = 10;
       this.body = Bodies.circle(x, y, this.r, options);
           
       World.add(world, this.body);
    }
    display(){
        this.color = color(random(0, 255), random(0,255), random(0,255));
    }
}