class Ground{
    constructor(x,y){
        var options={
            isStatic:true,
        }
      this.x=x;
      this.y=y;
      this.width=400;
      this.height=10;
      this.body=Bodies.rectangle(x,y,2000,10,options);
      World.add(world,this.body);
        
    }
    display()
    {
      var pos=this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x,pos.y,2000,20);
    }
}