function Terrain(options) {
  
  this.context = options.context
  
  var soils = new Array(400);
  var empty_spots = [];
  
  for (var i=0; i < 20; i++) {
    for (var j=0; j < 20; j++) {
      var soil = new Image;
      soil.onload = _.bind(function(m, n){
        this.context.drawImage(soil, 32*m, 32*n)
      }, this, i, j);
      soil.src = 'images/soil.png'
    }
  }
  
}