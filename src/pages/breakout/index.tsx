import styled from 'styled-components';
import { Header } from '../../components/Header';
// import { BreakOut } from '../../games/BreakOut';
// import Menu from '../../games/Freeway/Menu';
// import { ScoreProvider } from '../../games/Freeway/ScoreContext';

export function BreakOutPage() {

  return (
    <>
      <Header />
      <Wrapper>
        {/* <ScoreProvider> */}
        <Container>
          {/* <BreakOut /> */}
          {/* <Menu /> */}
        </Container>
        {/* </ScoreProvider> */}
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
