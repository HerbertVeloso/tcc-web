import collisionSound from '../../assets/sounds/collision.mp3';
import scoreSound from '../../assets/sounds/score.wav';

export function playCollisionSound() {
  const sound = new Audio(collisionSound);
  sound.play();
}

export function playScoreSound() {
  const sound = new Audio(scoreSound);
  sound.play();
}
