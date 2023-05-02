import styled from 'styled-components';
import { Freeway } from '../../games/Freeway';
import Menu from '../../games/Freeway/Menu';
import { ScoreProvider } from '../../games/Freeway/ScoreContext';

export function GamesPage() {

  return (
    <Wrapper>
      <h1>Games</h1>
      <ScoreProvider>
        <Container>
          <Freeway />
          <Menu />
        </Container>
      </ScoreProvider>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 32px;
`;
