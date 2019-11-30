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

function Shape(x,y,velX,velY,exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

function Ball(x, y, velX, velY, color, size,exists) {
  Shape.call(this,x,y,velX,velY,exists);
  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

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

function EvilCircle(x,y,exists) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x,this.y, this.size,0,2*Math.PI);
  ctx.stroke();  
}

EvilCircle.prototype.checkBounds = function() {
  if((this.x + this.size) > width){//右边缘
    this.x = width-this.size;
  }

  if((this.x - this.size) <= 0){//左边缘
    this.x = this.size;
  }

  if((this.y + this.size) > height){
    this.y = height - this.size;
  }

  if((this.y - this.size) <= 0){
    this.y = this.size;
  }
}

EvilCircle.prototype.setControls = function() {
  window.onkeydown = e => {
    if (e.key === 'a') {
      this.x -= this.velX;
    } else if (e.key === 'd') {
      this.x += this.velX;
    } else if (e.key === 'w') {
      this.y -= this.velY;
    } else if (e.key === 's') {
      this.y += this.velY;
    }
  }
}

EvilCircle.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (balls[j].exists===true) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
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
      size,
      true
    );
    balls.push(ball);
  }

  for (var i = 0;i < balls.length;i++){
    if(balls[i].exists){
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();      
    }
  }

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}

var ran = random(10,20);
var evil = new EvilCircle(      
  random(0+ran,width-ran),
  random(0+ran,height-ran),
  true
);

var p = document.createElement('p');
document.body.appendChild(p);

evil.setControls();
loop();