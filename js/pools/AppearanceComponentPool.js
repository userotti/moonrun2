//Components
ECS.Components.Appearance = function AppearanceComponent (x,y,scale,texture){
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.position.x = x;
    this.sprite.position.y = y;
    this.sprite.scale.x = scale;
    this.sprite.scale.y = scale;




    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';

AppearanceComponentPool = gamecore.Pooled('AppearanceComponentPool',  // derive from gamecore.Pooled
{
    // Static constructor
    create:function (x,y,scale,texture)   // super will handle allocation from a managed pool of objects
    // the pool will autoexpand as required
    {
        var n = this._super();
        n.sprite.position.x = x;
        n.sprite.position.y = y;
        n.sprite.scale.x = scale;
        n.sprite.scale.y = scale;
        n.sprite.texture = texture;
        n.sprite.pivot.x = texture.width/2;
        n.sprite.pivot.y = texture.height/2;


        return n;
    }
},{
    name: '',
    init: function(x,y,scale,texture){
        this.name = ECS.Components.Appearance.prototype.name;
        this.sprite = (new ECS.Components.Appearance(texture)).sprite;
        this.sprite.position.x = x;
        this.sprite.position.y = y;
        this.sprite.scale.x = scale;
        this.sprite.scale.y = scale;



    },

});


//Systems
ECS.Systems.Movement = function MovementSystem ( entitiesLinkedList ) {

    var node = entitiesLinkedList.first;
    while (node)
    {
        var entity = node.object()
        if (entity.components.appearance && entity.components.velocity) {
            entity.components.appearance.sprite.x += entity.components.velocity.vel.x;
            entity.components.appearance.sprite.y += entity.components.velocity.vel.y;
        }

        node = node.next();
    }
}
