import { useContext } from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../components/SubTitle';
import { ScoreContext } from './ScoreContext';

export default function Menu() {
  const { score } = useContext(ScoreContext);
  return (
    <aside>
      <Title>Pong Game</Title>

      <Points>Pontuação</Points>
      <PointsNumber>{score} pontos</PointsNumber>

      <Strong>Seu Recorde</Strong>
      <p>{0} pontos</p>

      <Strong>Instruções</Strong>
      <Text>Use as setinhas do teclado para andar para cima e para baixo</Text>
      <Text>Arrow Up - Move o personagem para cima</Text>
      <Text>Arrow Down - Move o personagem para baixo</Text>
    </aside>
  );
}

const Title = styled(SubTitle)`
  margin: 0;
  margin-bottom: 32px;
`;

const Points = styled.h2`
  color: var(--secondary);
  margin-bottom: 4px;
`;

const PointsNumber = styled.p`
  font-size: 24px;
  color: var(--secondary);
`;

const Strong = styled.h3`
  margin-top: 24px;
  margin-bottom: 4px;
`;

const Text = styled.p`
  margin-bottom: 16px;
`;

