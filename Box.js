class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
    var score;
  }
display(){
  
  if(this.body.speed < 10){
      super.display();
  }
  else{
      World.remove(world,this.body);
      push();
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      this.visibility = this.visibility-10;
     pop();
       }

       if(this.visibility<0){
        count = +10;
        this.visibility = 0;
       }
       
       
    
}

};
