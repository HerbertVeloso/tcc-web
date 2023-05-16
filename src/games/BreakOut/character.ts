import characterSprite from '../../assets/images/ator-1.png';

export type Character = {
  sprite: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const initialPosition = 368;
const size = 28;
const speed = 5;
const limit = 600 - size;

const startCharacter = {
  sprite: characterSprite,
  x: 100,
  y: initialPosition,
  width: 28,
  height: 28,
};

export let character = startCharacter;

export function moveCharacter(event: KeyboardEvent) {
  if (event.code === 'ArrowLeft') {
    character = {
      ...character,
      x: character.x >= speed ? character.x - speed : 0,
    };
  } else if (event.code === 'ArrowRight') {
    character = {
      ...character,
      x: character.x < limit ? character.x + speed : limit,
    };
  }
}

export function resetCharacter() {
  character = startCharacter;
}

