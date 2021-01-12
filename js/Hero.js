class Hero{
    constructor(x,y,r){
        var options={
            density:1,
            frictionAir:1,
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/Superhero-02.png");
        this.image.scale=3.0;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
        
    }

    display()
    {
        var pos = this.body.position;
        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        console.log(this.body.position.x)

    }
}