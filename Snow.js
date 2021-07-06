class Snow{
    constructor(x,y,r){
        var options = {
            restitution :0.4,
            // friction : 1.0
        }
   
       this.r = r;
       this.body = Bodies.circle(x,y,r,options);
       this.image = loadImage("snow4.webp");
       World.add(world,this.body);
    }
   
       display(){
           push();
           var pos = this.body.position;
           var angle = this.body.angle;
           translate(pos.x,pos.y);
           rotate(angle);
          image(this.image,0,0,30,30);
           pop();
       }
   }