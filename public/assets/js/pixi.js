var app = new PIXI.Application(640, 360);
      document.body.appendChild(app.view);
      var circle = new PIXI.Graphics();
      circle.beginFill(0x5cafe2);
      circle.drawCircle(0, 0, 80);
      circle.x = 320;
      circle.y = 180;
      app.stage.addChild(circle);





// PIXI.utils.sayHello();

// const app = new PIXI.Application();
 
// // The application will create a canvas element for you that you
// // can then insert into the DOM.
// document.body.appendChild(app.view);
 
// var stage = new PIXI.container();
// // load the texture we need
// PIXI.loader.add('smelly', 'public/assets/img/Smelly.png').load((loader, resources) => {
 
//     // This creates a texture from a 'bunny.png' image.
//     const smelly = new PIXI.Sprite(resources.smelly.texture);
 
//     // Setup the position of the bunny
//     smelly.x = app.renderer.width / 2;
//     smelly.y = app.renderer.height / 2;
 
//     // Rotate around the center
//     smelly.anchor.x = 0.5;
//     smelly.anchor.y = 0.5;
 
//     // Add the bunny to the scene we are building.
//     app.stage.addChild(smelly);
//     renderer.render(stage);
 
//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bunny around a bit
//         smelly.rotation += 0.01;
//     });
// });





// const app = new PIXI.Application(640, 360, {
//     transparent: true,
//     autoResize: true,
//     antialias: true,
//     resolution: 1,
// });
// document.body.appendChild(app.view);

// app.stage.addChild(PIXI.Sprite.fromImage('public/assets/img/Smelly.png'));



// reelContainer = new PIXI.Container();
//     for (let i = 0; i < 3; i++) {
//         const rc = new PIXI.Container();
//         rc.x = i * REEL_WIDTH;
//         reelContainer.addChild(rc);
//         reel = {
//             container: rc,
//             symbols: [],
//             position: 0,
//             previousPosition: 0,
//             blur: new PIXI.filters.BlurFilter()
//         };
//         //let newposition = reel.reelContainer.getChildIndex;
//         reel.blur.blurX = 0;
//         reel.blur.blurY = 0;
//         rc.filters = [reel.blur];


//     //container for footer items
//     const footerContainer = new PIXI.Container();
//     // draw a rounded rectangle
//     let graphicsOne = new PIXI.Graphics();
//     graphicsOne.lineStyle(2, 0xFF00FF, 1);
//     graphicsOne.beginFill(0xFF00BB, 0.25);
//     graphicsOne.drawRoundedRect(50, 296, 120, 35, 15);
//     graphicsOne.endFill();
//     // draw a rounded rectangle
//     let graphicsTwo = new PIXI.Graphics();
//     graphicsTwo.lineStyle(2, 0xFF00FF, 1);
//     graphicsTwo.beginFill(0xFF00BB, 0.25);
//     graphicsTwo.drawRoundedRect(255, 296, 120, 35, 15);
//     graphicsTwo.endFill();

//     }



// var pixi = require("pixi.js")

// // import * as PIXI from "pixi.js"

// import {
//     Container as Container,
//     Graphics as Graphics,
//     autoDetectRenderer as autoDetectRenderer} from "pixi.js";
//    const renderer = autoDetectRenderer(0, 0);
//    renderer.autoResize = true;
//    renderer.view.style.position = "absolute";
//    renderer.view.style.display = "block";
//    renderer.resize(window.innerWidth, window.innerHeight);
//    document.body.appendChild(renderer.view);
//    let stage = new Container();
//    const radius = 30;
//    let x = 200;
//    let y = 200;
//    let circle = new Graphics();
//    circle.beginFill(0x00BFFF);
//    circle.lineStyle(0);
//    circle.drawCircle(x, y, radius);
//    circle.endFill();
//    stage.addChild(circle);
//    renderer.render(stage);

