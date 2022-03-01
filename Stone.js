class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		restituion:0.8,
		density:12,
		friction:0.9
	}
		
		this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;	
            var angle=this.body.angle	
			push()
            rotate(angle)
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)
         
			pop()
	}

}