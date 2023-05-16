import { useContext, useEffect } from 'react';
import background from '../../assets/images/estrada.png';
import { useCanvas } from '../../hooks/useCanvas';
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

export function Freeway() {
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
