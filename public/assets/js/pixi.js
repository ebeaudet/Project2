
var app = new PIXI.Application(640, 360);
      document.body.appendChild(app.view);

// load the texture we need
PIXI.loader.add('smelly', './assets/img/Smelly.png').load((loader, resources) => {
 
    // This creates a texture from a 'bunny.png' image.
    const smelly = new PIXI.Sprite(resources.smelly.texture);
 
    // Setup the position of the bunny
    smelly.x = app.renderer.width / 2;
    smelly.y = app.renderer.height / 2;
 
    // Rotate around the center
    smelly.anchor.x = 0.5;
    smelly.anchor.y = 0.5;
 
    // Add the bunny to the scene we are building.
    app.stage.addChild(smelly);
    renderer.render(stage);


 
//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bunny around a bit
//         smelly.rotation += 0.01;
//     });
});

