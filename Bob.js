class Bob{
   constructor(x,y,radius) {
       var options={
           isStatic:false,
           restitution:1, //0.03 //prev values
           friction:0, //0.5
           density:0.8 //1.2
       }
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.body=Bodies.circle(this.x,this.y,this.radius,options); //C of circle was in upper case
     
       World.add(world,this.body)    
   }
   display(){
       ellipseMode(CENTER)
       fill ("purple")
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius); //as its is ellipse we need radius width and radius height
      
   }
}