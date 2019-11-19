// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

var balls = [];

// 生成随机数的函数
function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;//水平速度
  this.velY = velY;//竖直速度
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function() {//画小球
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x,this.y, this.size,0,2*Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if((this.x + this.size) > width){//右边缘
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0){//左边缘
    this.velX = - (this.velX);
  }

  if((this.y + this.size) > height){
    this.velY = - (this.velY);
  }

  if((this.y - this.size) <= 0){
    this.velY = - (this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  while(balls.length < 70){
    var size = random(10,20);
    var ball = new Ball(
      random(0+size,width-size),
      random(0+size,height-size),
      random(-5,5),
      random(-5,5),
      randomColor(),
      size
    );
    balls.push(ball);
  }

  for (var i = 0;i < balls.length;i++){
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop);
}

loop();