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

const initialPosition = 540;
const enemyWidth = 50;
const enemyHeight = 40;

export let enemies = [
  {
    sprite: car1,
    x: initialPosition,
    y: 40,
    width: enemyWidth,
    height: enemyHeight,
    speed: 1.2,
  },
  {
    sprite: car2,
    x: initialPosition,
    y: 97,
    width: enemyWidth,
    height: enemyHeight,
    speed: 1.4,
  },
  {
    sprite: car3,
    x: initialPosition,
    y: 150,
    width: enemyWidth,
    height: enemyHeight,
    speed: 1.7,
  },
  {
    sprite: car1,
    x: initialPosition,
    y: 210,
    width: enemyWidth,
    height: enemyHeight,
    speed: 1.3,
  },
  {
    sprite: car2,
    x: initialPosition,
    y: 262,
    width: enemyWidth,
    height: enemyHeight,
    speed: 1,
  },
  {
    sprite: car3,
    x: initialPosition,
    y: 320,
    width: enemyWidth,
    height: enemyHeight,
    speed: 2,
  },
];

export function moveEnemies() {
  enemies = enemies.map(enemy => ({
    ...enemy,
    x: enemy.x < 0 ? initialPosition : enemy.x - enemy.speed,
  }));
}
