import { useContext, useEffect } from 'react';
import background from '../../assets/images/estrada.png';
import { useCanvas } from '../../hooks/useCanvas';
import { BallMovement, WallCollision } from './ball';
import { character, moveCharacter, resetCharacter } from './character';
import { verifyCollision } from './collision';
import { enemies, moveEnemies } from './enemies';
import { ScoreContext } from './ScoreContext';

type setImageProps = {
  sprite: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const teste = {
  x: 20,
  y: 200,
  dx: 5,
  dy: 5,
  rad: 10,
  speed: 10,
};

const paddleProps = {
  height: 20,
  width: 100,
  x: 100,
  color: 'orange',
};

const player = {
  name: 'Dhaval',
  lives: 5,
  score: 0,
  level: 1,
};

export function BreakOut() {
  const { canvasRef, context } = useCanvas();
  const { minusScore, plusScore } = useContext(ScoreContext);

  function draw({ sprite, x, y, width, height }: setImageProps) {
    const img = new Image();
    img.src = sprite;

    img.onload = () => {
      context?.drawImage(img, x, y, width, height);
    };
  }

  function render() {
    draw({ sprite: background, x: 0, y: 0, width: 600, height: 400 });
    draw(character);
    moveEnemies();
    enemies.forEach(enemy => draw(enemy));
    verifyCollision(character, enemies, resetCharacter, minusScore, plusScore);

    if (context) {
      BallMovement(context, teste);
      WallCollision(teste, canvasRef.current, player, paddleProps);
    }
    requestAnimationFrame(render);
  }

  useEffect(() => {
    document.addEventListener('keydown', moveCharacter);

    return () => {
      document.removeEventListener('keydown', moveCharacter);
    };
  }, []);


  useEffect(() => {
    render();
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
