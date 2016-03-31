ECS.Components.Gravity = function GravityComponent (texture){
    this.acc = new PIXI.Point(0,0);
    return this;
};
ECS.Components.Gravity.prototype.name = 'gravity';


GravityComponentPool = gamecore.Pooled('GravityComponentPool',  // derive from gamecore.Pooled
{
    // Static constructor
    create:function (vx, vy)   // super will handle allocation from a managed pool of objects
    // the pool will autoexpand as required
    {
        var n = this._super();
        n.acc.x = vx;
        n.acc.y = vy;
        return n;
    }
},{
    name: '',
    init: function(ax, ay){
        this.name = ECS.Components.Gravity.prototype.name;
        this.acc = (new ECS.Components.Gravity(ax, ay)).acc;
    },

});


ECS.Systems.Gravity = function GravitySystem ( entitiesLinkedList ) {

    var node = entitiesLinkedList.first;
    while (node)
    {
        var entity = node.object()
        if (entity.components.gravity && entity.components.velocity) {
            entity.components.velocity.vel.x += entity.components.gravity.acc.x;
            entity.components.velocity.vel.y += entity.components.gravity.acc.y;

        }

        node = node.next();
    }
}
