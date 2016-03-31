var ECS = {};
ECS.Components = {};
ECS.Systems = {};

ECS.Entity = function Entity(){
    // Generate a pseudo random ID
    this.id = (+new Date()).toString(16) +
    (Math.random() * 100000000 | 0).toString(16) +
    ECS.Entity.prototype._count;

    // increment counter
    ECS.Entity.prototype._count++;

    // The component data will live in this object
    this.components = {};

    return this;
};
// keep track of entities created
ECS.Entity.prototype._count = 0;

ECS.Entity.prototype.addComponent = function addComponent ( component ){
    // Add component data to the entity
    // NOTE: The component must have a name property (which is defined as
    // a prototype protoype of a component function)
    this.components[component.name] = component;
    return this;
};
ECS.Entity.prototype.removeComponent = function removeComponent ( component ){
    // Remove component data by removing the reference to it.
    // Allows either a component function or a string of a component name to be
    // passed in
    var name = componentName; // assume a string was passed in

    if(typeof componentName === 'function'){
        // get the name from the prototype of the passed component function
        name = componentName.prototype.name;
    }

    // Remove component data by removing the reference to it
    delete this.components[name];
    return this;
};

ECS.Entity.prototype.print = function print () {
    // Function to print / log information about the entity
    console.log(JSON.stringify(this, null, 4));
    return this;
};




//Systems
ECS.Systems.Death = function RotationSystem ( entitiesLinkedList ) {

    var node = entitiesLinkedList.first;
    while (node)
    {
        var entity = node.object()
        if (entity.components.appearance) {
            if (entity.components.appearance.sprite.y < 500){

                entitiesLinkedList.remove(entity);

            }
        }

        node = node.next();
    }
}
