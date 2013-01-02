CanvasRenderingContext2D.prototype.clear = function() {
  this.clearRect(0, 0, this.WIDTH, this.HEIGHT);
}

var game_canvas = document.querySelector("#game"),
    game_context = game_canvas.getContext('2d'),
    terrain_canvas = document.querySelector("#terrain"),
    terrain_context = terrain_canvas.getContext('2d');
    
  game_context.WIDTH = 640;
  game_context.HEIGHT = 640;
    
  var tank = new Tank({
    context: game_context,
    x: 640/2 - 16,
    y: 640/2 - 16
  });
  
  var terrain = new Terrain({
    context: terrain_context
  })