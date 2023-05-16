import characterSprite from '../../assets/images/ator-1.png';

export type Character = {
  sprite: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const initialPosition = 368;
const speed = 5;

const startCharacter = {
  sprite: characterSprite,
  x: 100,
  y: initialPosition,
  width: 28,
  height: 28,
};

export let character = startCharacter;

export function moveCharacter(event: KeyboardEvent) {
  if (event.key === 'ArrowUp') {
    character = {
      ...character,
      y: character.y - speed,
    };
  } else if (event.key === 'ArrowDown') {
    character = {
      ...character,
      y: character.y >= initialPosition ? initialPosition : character.y + speed,
    };
  }
}

export function resetCharacter() {
  character = startCharacter;
}

