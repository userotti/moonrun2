

//Systems
ECS.Systems.Rotation = function RotationSystem ( entitiesLinkedList ) {

    var node = entitiesLinkedList.first;
    while (node)
    {
        var entity = node.object()
        if (entity.components.appearance && entity.components.velocity) {
            entity.components.appearance.sprite.rotation = Math.atan2(entity.components.velocity.vel.y,entity.components.velocity.vel.x) + Math.PI/2;

        }

        node = node.next();
    }
}
