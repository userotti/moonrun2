
ECS.Components.Velocity = function VelocityComponent (texture){
    this.vel = new PIXI.Point(0,0);
    return this;
};
ECS.Components.Velocity.prototype.name = 'velocity';

VelocityComponentPool = gamecore.Pooled('VelocityComponentPool',  // derive from gamecore.Pooled
{
    // Static constructor
    create:function (vx, vy)   // super will handle allocation from a managed pool of objects
    // the pool will autoexpand as required
    {
        var n = this._super();
        n.vel.x = vx;
        n.vel.y = vy;
        return n;
    }
},{
    name: '',
    init: function(vx, vy){
        this.name = ECS.Components.Velocity.prototype.name;
        this.vel = (new ECS.Components.Velocity(vx, vy)).vel;
    },

});
