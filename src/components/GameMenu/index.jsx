import { useEffect } from 'react';
import { Instructions, Points, PointsNumber, Strong, Title } from './styles';

export function GameMenu({ title, score, gameOver, resetGame, children }) {
  useEffect(() => {
    if (gameOver && resetGame) {
      const oldRecord = localStorage.getItem(title) ?? 0;
      if (oldRecord < score) {
        localStorage.setItem(title, score.toString());
      }
      alert(`GAME OVER: ${score} PONTOS`);
      resetGame();
    } else {
      const oldRecord = localStorage.getItem(title) ?? 0;
      if (oldRecord < score) {
        localStorage.setItem(title, score.toString());
      }
    }
  }, [gameOver, score]);

  return (
    <aside>
      <Title>{title}</Title>

      <Points>Pontuação</Points>
      <PointsNumber>{score} pontos</PointsNumber>

      <Strong>Seu Recorde</Strong>
      <p>{localStorage.getItem(title) ?? 0} pontos</p>

      <Instructions>
        <Strong>Instruções</Strong>
        {children}
      </Instructions>
    </aside>
  );
}
