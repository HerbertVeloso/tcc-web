export function BallMovement(ctx, ballObj) {
  const data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
  data.draw(ctx);
  ballObj.x += ballObj.dx;
  ballObj.y += ballObj.dy;
}

class Ball {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}


export function WallCollision(
  ballObj,
  canvas,
  player,
  paddleProps,
) {
  if (ballObj.y + ballObj.rad > canvas.height) {
    player.lives--;
    ballObj.x = paddleProps.x;
    ballObj.y = paddleProps.y - 30;
    ballObj.dx = 6 * (Math.random() * 2 - 1);
    ballObj.dy = -6;
  }
  if (ballObj.y - ballObj.rad < 0) {
    ballObj.dy *= -1;
  }

  if (ballObj.x + ballObj.rad > canvas.width || ballObj.x - ballObj.rad < 0) {
    ballObj.dx *= -1;
  }
}
