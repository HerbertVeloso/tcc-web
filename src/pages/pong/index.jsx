import styled from 'styled-components';
import { Header } from '../../components/Header';
import Pong from '../../games/Pong';

export function PongPage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Pong />
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 64px auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 32px;
`;
