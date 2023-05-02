import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';
import { playCollisionSound } from './sounds';
import { Character } from './useCharacter';
import { Enemy } from './useEnemies';

export function useCollision() {
  const { minusScore, plusScore } = useContext(ScoreContext);

  function verifyCollision(character: Character, enemies: Enemy[], resetCharacter: () => void) {
    const characterPosition = {
      startX: character.x,
      endX: character.x + character.width,
      startY: character.y,
      endY: character.y + character.height,
    };

    enemies.forEach(enemy => {
      const enemyPosition = {
        startX: enemy.x,
        endX: enemy.x + enemy.width,
        startY: enemy.y,
        endY: enemy.y + enemy.height,
      };

      if (
        characterPosition.endX > enemyPosition.startX &&
        characterPosition.startX < enemyPosition.endX &&
        characterPosition.endY > enemyPosition.startY &&
        characterPosition.startY < enemyPosition.endY
      ) {
        minusScore();
        playCollisionSound();
        resetCharacter();
      }
    });

    if (character.y < 15) {
      plusScore();
      resetCharacter();
    }
  }

  return { verifyCollision };
}
