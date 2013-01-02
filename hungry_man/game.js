var boy = {
  x: 20,
  y: 20,
  image: new Image
}

var burger = {
  image: new Image
}

var canvas  = document.getElementById("stage"),
    context = canvas.getContext('2d'),
    eat_sound = new Audio('achievement.mp3');
    
window.addEventListener('keydown', function(event) {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  switch(event.keyCode) {
    case 37:
      boy.x -= 15;
      break;
    case 38:
      boy.y -= 15;
      break;
    case 39:
      boy.x += 15;
      break;
    case 40:
      boy.y += 15;
      break;
  }
  
  if (Math.abs(boy.x - burger.x) <= 32 && Math.abs(boy.y - burger.y) <= 32) {
    eat_sound.play();
    reset();
  } else {
    render();
  }
  
  
}, false)

function render() {
  context.drawImage(boy.image, boy.x, boy.y)
  context.drawImage(burger.image, burger.x, burger.y)
}

function reset() {
  randomize_burger_position();
  render();
}

function randomize_burger_position() {
  burger.x = 32 + (Math.random() * (canvas.width - 64));
  burger.y = 32 + (Math.random() * (canvas.height - 64));  
}

window.onload = function() {
  boy.image.src = 'player_0.png';
  burger.image.src = 'burger.png';
  randomize_burger_position();
  render();
}