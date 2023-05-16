import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Pong } from '../../games/Pong';
import Menu from '../../games/Pong/Menu';
import { ScoreProvider } from '../../games/Pong/ScoreContext';

export function GamesPage() {

  return (
    <>
      <Header />
      <Wrapper>
        <ScoreProvider>
          <Container>
            <Pong />
            <Menu />
          </Container>
        </ScoreProvider>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin:64px auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 32px;
`;
