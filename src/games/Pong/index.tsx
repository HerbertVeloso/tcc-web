import { useEffect } from 'react';
import { useCanvas } from '../../hooks/useCanvas';
import { Ball } from './Ball.js';
import { Game } from './game.js';
import { Paddle } from './Paddle.js';
import { PaddleAI } from './PaddleAI.js';
import { Score } from './Score.js';
import song from './snd/pong-hit.mp3';

export function Pong() {
  const { canvasRef, context } = useCanvas();

  function startGame() {
    Game.start();

    const score = new Score();
    const paddle = new Paddle();
    const paddle2 = new Paddle('right');
    const ball = new Ball();
    const paddleAI = new PaddleAI(ball);

    Game.addObject(score);
    Game.addObject(paddle);
    Game.addObject(ball);

    Game.addObject(paddleAI);

    paddle.update = function () {
      if (this.input.onKey(this.input.key.W)) {
        this.goUp();
      }

      if (this.input.onKey(this.input.key.S)) {
        this.goDown();
      }
    };

    paddle2.update = function () {
      if (this.input.onKey(this.input.key.UP)) {
        this.goUp();
      }

      if (this.input.onKey(this.input.key.DOWN)) {
        this.goDown();
      }
    };

    ball.onLeftOut = function () {
      score.p2Point();
      this.resetPosition();
    };

    ball.onRightOut = function () {
      score.p1Point();
      this.resetPosition();
    };

    score.onGameOver = function (winner) {
      this.game.stop();
      alert(`Winner: ${winner}`);
    };
  }

  useEffect(() => {
    Game.constructor(canvasRef.current);
    Promise.all([
      Game.SoundManager.loadAll([
        { name: 'pongHit', src: song }
      ]),
      Game.ImageManager.loadAll([])
    ]);
    startGame();
  }, [context]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{ backgroundColor: '#000' }}
    />
  );
}
