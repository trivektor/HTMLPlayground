function Tank(options) {
  
  var _this = this;
  
  this.x = options.x;
  this.y = options.y;
  
  this.image = new Image;
  
  this.context = options.context;
      
  this.image.onload = function() {
    _this.context.drawImage(_this.image, _this.x, _this.y)
  }
  this.loadImage('tank_up.png')
  
  $(document).on('keydown', function(event) {
    switch(event.which) {
      case 37:
        _this.moveLeft();
        break;
      case 38:
        _this.moveUp();
        break;
      case 39:
        _this.moveRight();
        break;
      case 40:
        _this.moveDown();
        break;
    }
  })
}

Tank.prototype.loadImage = function(image_name) {
  this.image.src = 'images/' + image_name ;
}

Tank.prototype.moveUp = function() {
  this.loadImage('tank_up.png');
  this.y -= 5;
  this.translateCoordinates();
}

Tank.prototype.moveDown = function() {
  this.loadImage('tank_down.png');
  this.y += 5;
  this.translateCoordinates();
}

Tank.prototype.moveLeft = function() {
  this.loadImage('tank_left.png');
  this.x -= 5;
  this.translateCoordinates();
}

Tank.prototype.moveRight = function() {
  this.loadImage('tank_right.png');
  this.x += 5;
  this.translateCoordinates();
}

Tank.prototype.moveTo = function(options) {
  this.context.clear();
  this.context.drawImage(this.image, options.x, options.y)
}

Tank.prototype.translateCoordinates = function() {
  this.context.clear();
  this.context.drawImage(this.image, this.x, this.y); 
}