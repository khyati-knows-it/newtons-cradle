class Roof{ // class name was paper 
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           /* 'restitution':0,
            'friction':1,
            'density':0.1*/ // we dont need all these options as its a roof similar to ground
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        //fill ('brown');
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}