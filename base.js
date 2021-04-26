class base{

  constructor(){
      var ground_options={
          isStatic : true
        }
      
        this.ground = Bodies.rectangle(450,390,900,20,ground_options)
        World.add(world,this.ground);
  }
  display(){
      noStroke();
      fill("green");
      rectMode(CENTER);
      rect(this.base.position.x,this.base.position.y,900,20);
  }
}