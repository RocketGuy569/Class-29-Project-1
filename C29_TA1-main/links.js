class Links {
    constructor(bodyA,bodyB){
        var lastlinks = bodyA.body.bodies.length-2;
        this.links = Constraint.create(
           {
            bodyA:bodyA.body.bodies[lastlinks],
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01
        })
        World.add(engine.world,this.links)
        } 
        }     
