var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["535de2d0-2066-46f3-a929-b2466acb34db","3d63ceb3-14c9-48b5-b904-e8079cae551c","e1d1a2b5-1d78-4a77-bbd3-00231eabe5c0","01674181-cc69-4e4d-83df-b2345cee143f","cd201bc7-f14e-4e7c-a66f-03eeec0ca3ca","83887364-a9db-478d-9ed1-47a49a4ee334","47c7ead5-8352-4e9d-94f6-4b2ec1f54636","125d9301-4f27-4e75-90c4-c7a58afd6374","a0aed892-95b6-4236-b67f-b20abb9bfc75","446d4ae5-e07a-4750-baad-7d3eaafd8652","39684c2c-2462-4e08-8903-9387626b4aaf","5bd22710-de44-4347-8d82-cd752cb9e566"],"propsByKey":{"535de2d0-2066-46f3-a929-b2466acb34db":{"name":"sea","sourceUrl":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"liip36Uzd.UEskze8YUtuWMvk3veS2QD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png"},"3d63ceb3-14c9-48b5-b904-e8079cae551c":{"name":"shark","sourceUrl":null,"frameSize":{"x":130,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"nRt.sCFZDPFir577.Xqeb8vJc45CMRvk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":62},"rootRelativePath":"assets/3d63ceb3-14c9-48b5-b904-e8079cae551c.png"},"e1d1a2b5-1d78-4a77-bbd3-00231eabe5c0":{"name":"fish1","sourceUrl":null,"frameSize":{"x":75,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"i_kEem4CEDZEew.N9ezazOOeOLCm.DLk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":38},"rootRelativePath":"assets/e1d1a2b5-1d78-4a77-bbd3-00231eabe5c0.png"},"01674181-cc69-4e4d-83df-b2345cee143f":{"name":"fish2","sourceUrl":null,"frameSize":{"x":50,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"oQd9uWxKZnh3ozP86AimDljPjRjaQnzx","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":19},"rootRelativePath":"assets/01674181-cc69-4e4d-83df-b2345cee143f.png"},"cd201bc7-f14e-4e7c-a66f-03eeec0ca3ca":{"name":"fish3","sourceUrl":null,"frameSize":{"x":50,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"7_xuop6G9ITxaVrGTYYLuVNaB6mZmqeY","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":33},"rootRelativePath":"assets/cd201bc7-f14e-4e7c-a66f-03eeec0ca3ca.png"},"83887364-a9db-478d-9ed1-47a49a4ee334":{"name":"urchin1","sourceUrl":null,"frameSize":{"x":50,"y":53},"frameCount":1,"looping":true,"frameDelay":12,"version":"dTKwTVoawhNQ2oKoE.U82PtEsxnyGWz_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":53},"rootRelativePath":"assets/83887364-a9db-478d-9ed1-47a49a4ee334.png"},"47c7ead5-8352-4e9d-94f6-4b2ec1f54636":{"name":"urchin2","sourceUrl":null,"frameSize":{"x":50,"y":53},"frameCount":1,"looping":true,"frameDelay":12,"version":"EdVcuPF1jd0.p6EW0FByg2fLZe73zsjq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":53},"rootRelativePath":"assets/47c7ead5-8352-4e9d-94f6-4b2ec1f54636.png"},"125d9301-4f27-4e75-90c4-c7a58afd6374":{"name":"urchin3","sourceUrl":null,"frameSize":{"x":50,"y":53},"frameCount":1,"looping":true,"frameDelay":12,"version":"S2GIKiPQDkqka.OY.jwnnFa7UlJj_Lf3","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":53},"rootRelativePath":"assets/125d9301-4f27-4e75-90c4-c7a58afd6374.png"},"a0aed892-95b6-4236-b67f-b20abb9bfc75":{"name":"spike1","sourceUrl":null,"frameSize":{"x":30,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"yM2tr8st9olRd5IKLaGL1jmERFlOd9GW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":51},"rootRelativePath":"assets/a0aed892-95b6-4236-b67f-b20abb9bfc75.png"},"446d4ae5-e07a-4750-baad-7d3eaafd8652":{"name":"spike2","sourceUrl":null,"frameSize":{"x":30,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"NDMEuYk5RIFOTO3as7vQ68a.aYyL0GJa","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":51},"rootRelativePath":"assets/446d4ae5-e07a-4750-baad-7d3eaafd8652.png"},"39684c2c-2462-4e08-8903-9387626b4aaf":{"name":"spike3","sourceUrl":null,"frameSize":{"x":30,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ss_8dsEmBIW.WvLfmV5CLffJ1mq309eV","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":51},"rootRelativePath":"assets/39684c2c-2462-4e08-8903-9387626b4aaf.png"},"5bd22710-de44-4347-8d82-cd752cb9e566":{"name":"fish4","sourceUrl":null,"frameSize":{"x":60,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"Qt_ZvOM7Tq3J8s6f1F6hm30jPbLyWseh","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":25},"rootRelativePath":"assets/5bd22710-de44-4347-8d82-cd752cb9e566.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sea = createSprite(200, 300);
sea.setAnimation("sea");
var shark = createSprite(70, 100);
shark.setAnimation("shark");
var fish1 = createSprite(60, 200);
fish1.setAnimation("fish1");
var fish2 = createSprite(360, 70);
fish2.setAnimation("fish2");
var fish3 = createSprite(330, 150);
fish3.setAnimation("fish3");
var fish4 = createSprite(250, 310);
fish4.setAnimation("fish4");
var urchin1 = createSprite(330, 250);
urchin1.setAnimation("urchin1");
var urchin2 = createSprite(220, 150);
urchin2.setAnimation("urchin2");
var urchin3 = createSprite(140, 290);
urchin3.setAnimation("urchin3");
var spike1 = createSprite(310, 0);
spike1.setAnimation("spike1");
var spike2 = createSprite(330, 0);
spike2.setAnimation("spike2");
var spike3 = createSprite(350, 0);
spike3.setAnimation("spike3");
var gameState="serve";
var fish = 0;

function draw() {
  background("rgb(0, 191, 255)");
  fill("black");
  textSize(20);
  text("Peces: "+fish, 20, 20);
  fill("red");
  textSize(13);
  text("Mueve al tiburón con las flechas, evita tocar los erizos y los picos", 13, 40);
  if (gameState=="serve") {
    gameState = "play";
  }
  if (gameState=="play") {
    if (shark.isTouching(urchin1) || (shark.isTouching(urchin2) || (shark.isTouching(urchin3) || (shark.isTouching(spike1) || (shark.isTouching(spike2) || shark.isTouching(spike3)))))) {
      shark.destroy();
      gameState = "end";
    }
  }
  if (gameState=="end") {
    fill("green");
    textSize(19);
    text("Fin del juego", 160, 90);
  }
  if (fish == 4) {
    fill("black");
    textSize(25);
    text("Ganaste", 150, 70);
  }
  if (keyDown("up")) {
    shark.y = shark.y - 10;
  }
  if (keyDown("down")) {
    shark.y = shark.y + 10;
  }
  if (keyDown("left")) {
    shark.x = shark.x - 10;
  }
  if (keyDown("right")) {
    shark.x = shark.x + 10;
  }
  
  if (shark.isTouching(fish1) || (shark.isTouching(fish2) || (shark.isTouching(fish3) || shark.isTouching(fish4)))) {
    playSound("assets/category_alerts/vibrant_game_courious_alert_3_winner.mp3");
  }
  if (shark.isTouching(urchin1) || (shark.isTouching(urchin2) || (shark.isTouching(urchin3) || (shark.isTouching(spike1) || (shark.isTouching(spike2) || shark.isTouching(spike3)))))) {
    playSound("assets/category_alerts/retro_game_health_pickup_6.mp3");
  }
  
  
  if (shark.isTouching(fish1)) {
    fish = fish+1;
    fish1.destroy();
  }
  if (shark.isTouching(fish2)) {
    fish = fish+1;
    fish2.destroy();
  }
  if (shark.isTouching(fish3)) {
    fish = fish+1;
    fish3.destroy();
  }
  if (shark.isTouching(fish4)) {
    fish = fish+1;
    fish4.destroy();
  }
  createEdgeSprites();
  shark.bounceOff(edges);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
