import { useEffect } from 'react';
import background from '../../assets/images/estrada.png';
import { useCanvas } from '../../hooks/useCanvas';
import { useCharacter } from './useCharacter';
import { useCollision } from './useCollision';
import { useEnemies } from './useEnemies';

type setImageProps = {
  url: string;
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
}

export function Freeway() {
  const { canvasRef, context } = useCanvas();
  const { character, resetCharacter } = useCharacter();
  const { enemies, moveEnemies } = useEnemies();
  const { verifyCollision } = useCollision();

  function setImage({ url, xPosition, yPosition, width, height }: setImageProps) {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      context?.drawImage(img, xPosition, yPosition, width, height);
    };
  }

  useEffect(() => {
    const engine = setInterval(() => {
      moveEnemies();
    }, 50);

    return () => {
      clearInterval(engine);
    };
  }, []);

  useEffect(() => {
    verifyCollision(character, enemies, resetCharacter);
    setImage({ url: background, xPosition: 0, yPosition: 0, width: 600, height: 400 });
    setImage({ url: character.sprite, xPosition: character.x, yPosition: character.y, width: character.width, height: character.height });
    enemies.forEach(enemy => {
      setImage({ url: enemy.sprite, xPosition: enemy.x, yPosition: enemy.y, width: enemy.width, height: enemy.height });
    });

    return () => {
      context?.clearRect(0, 0, 600, 400);
    };
  }, [background, character, enemies]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{ backgroundColor: '#000' }}
    />
  );
}
