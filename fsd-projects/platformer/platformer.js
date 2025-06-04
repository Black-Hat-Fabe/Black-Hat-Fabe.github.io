$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

// TODO 1 - Enable the Grid
// toggleGrid(); // Uncomment to show grid while building

// TODO 2 - Create Platforms
createPlatform(0, 580, 1400, 20);          // ground
createPlatform(100, 450, 200, 20);         // 1st platform
createPlatform(400, 350, 200, 20);         // 2nd platform
createPlatform(700, 250, 200, 20);         // 3rd platform
createPlatform(1000, 150, 200, 20);        // 4th platform
createPlatform(300, 100, 100, 20);         // top-left tricky
createPlatform(1250, 400, 100, 20);        // bonus

// TODO 3 - Create Collectables
createCollectable("diamond", 110, 400);
createCollectable("steve", 720, 200, 0.5, 0.7);
createCollectable("grace", 1050, 100);
createCollectable("max", 1300, 370);

// TODO 4 - Create Cannons
createCannon("left", 300, 1500);
createCannon("top", 800, 1000);
createCannon("right", 200, 2000);

// TODO 5 - Make your level challenging!
// Level includes jumping, timing, dodging, and risk-taking to win!



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
