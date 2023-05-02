import { useState } from 'react';
import car1 from '../../assets/images/carro-1.png';
import car2 from '../../assets/images/carro-2.png';
import car3 from '../../assets/images/carro-3.png';

export type Enemy = {
  sprite: string;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

export function useEnemies() {
  const initialPosition = 540;
  const enemyWidth = 50;
  const enemyHeight = 40;

  const [enemies, setEnemies] = useState<Enemy[]>([
    {
      sprite: car1,
      x: initialPosition,
      y: 40,
      width: enemyWidth,
      height: enemyHeight,
      speed: 3.2,
    },
    {
      sprite: car2,
      x: initialPosition,
      y: 95,
      width: enemyWidth,
      height: enemyHeight,
      speed: 2.4,
    },
    {
      sprite: car3,
      x: initialPosition,
      y: 150,
      width: enemyWidth,
      height: enemyHeight,
      speed: 2.7,
    },
    {
      sprite: car1,
      x: initialPosition,
      y: 210,
      width: enemyWidth,
      height: enemyHeight,
      speed: 3.3,
    },
    {
      sprite: car2,
      x: initialPosition,
      y: 270,
      width: enemyWidth,
      height: enemyHeight,
      speed: 3,
    },
    {
      sprite: car3,
      x: initialPosition,
      y: 318,
      width: enemyWidth,
      height: enemyHeight,
      speed: 2,
    },
  ]);

  function moveEnemies() {
    setEnemies(prevEnemies => prevEnemies.map(enemy => ({
      ...enemy,
      x: enemy.x < 0 ? initialPosition : enemy.x - enemy.speed,
    })));
  }

  return { enemies, moveEnemies };
}
