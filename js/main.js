var renderer = new PIXI.WebGLRenderer(1200, 800);
document.body.appendChild(renderer.view);


var rocketsLL = new gamecore.LinkedList();
var appearance_componentsLL = new gamecore.LinkedList();

var stage = new PIXI.Container();
var game_resources = null;

// load the texture we need
PIXI.loader.add('rocket', 'img/rocket.png');
PIXI.loader.load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image.

    game_resources = resources;



    // _rocket.addComponent(AppearanceComponentPool.create(resources.rocket.texture));
    // console.log(_rocket);

    // rocket = new PIXI.Sprite(resources.rocket.texture);
    //
    // rocket.position.x = 400;
    // rocket.position.y = 300;
    //
    // rocket.pivot.x = 64;
    // rocket.pivot.y = 64;
    //
    // rocket.scale.x = 0.5;
    // rocket.scale.y = 0.5;
    //
    //


    animate();
});

function makeRocket(x,y,vx,vy,ax,ay,scale,texture){

    var rocket = EntityPool.create();
    var appearance_comp = AppearanceComponentPool.create(x,y,scale,texture);
    var vel_comp = VelocityComponentPool.create(vx,vy);
    var gravity_comp = GravityComponentPool.create(ax,ay);

    rocket.addComponent(appearance_comp)
    rocket.addComponent(vel_comp)
    rocket.addComponent(gravity_comp)


    stage.addChild(rocket.components.appearance.sprite);

    return rocket;
}

function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    ECS.Systems.Movement(rocketsLL);
    ECS.Systems.Gravity(rocketsLL);
    ECS.Systems.Rotation(rocketsLL);
    //ECS.Systems.Death(rocketsLL);


    // each frame we spin the bunny around a bit
    //rocket.rotation += 0.01;

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}

window.onmousedown = function(){
    for (var i = 0; i < 50; i++){
        rocketsLL.add(makeRocket(1200,800,Math.random()*-6 - 1,Math.random()*-8 - 1,0,0.04,1,game_resources.rocket.texture));
    }

}
