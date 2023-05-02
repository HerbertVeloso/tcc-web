import { useEffect, useState } from 'react';
import characterSprite from '../../assets/images/ator-1.png';

export type Character = {
  sprite: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export function useCharacter() {
  const initialPosition = 368;

  const startCharacter = {
    sprite: characterSprite,
    x: 100,
    y: initialPosition,
    width: 28,
    height: 28,
  };

  const [character, setCharacter] = useState<Character>(startCharacter);

  const speed = 5;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        setCharacter(prevCharacter => ({
          ...prevCharacter,
          y: prevCharacter.y - speed,
        }));
      } else if (event.key === 'ArrowDown') {
        setCharacter(prevCharacter => ({
          ...prevCharacter,
          y: prevCharacter.y >= initialPosition ? initialPosition : prevCharacter.y + speed,
        }));
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function resetCharacter() {
    setCharacter(startCharacter);
  }

  return { character, resetCharacter };
}
