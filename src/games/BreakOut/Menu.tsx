import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';

export default function Menu() {
  const { score } = useContext(ScoreContext);
  return (
    <aside>
      <h2>FreeWay Game</h2>

      <h3>Pontuação</h3>
      <p>{score} pontos</p>

      <h3>Seu Recorde</h3>
      <p>{0} pontos</p>

      <h3>Instruções</h3>
      <p>Use as setinhas do teclado para andar para cima e para baixo</p>
      <p>Arrow Up - Move o personagem para cima</p>
      <p>Arrow Down - Move o personagem para baixo</p>
    </aside>
  );
}
