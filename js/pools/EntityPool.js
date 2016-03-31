EntityPool = gamecore.Pooled('Entity',  // derive from gamecore.Pooled
{
    // Static constructor
    create:function ()   // super will handle allocation from a managed pool of objects
    // the pool will autoexpand as required
    {
        var n = this._super();
        return n;
    }
},
new ECS.Entity()
);
