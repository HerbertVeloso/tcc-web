import styled from 'styled-components';
import snake from '../../assets/images/snake.jpg';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { SubTitle } from '../../components/SubTitle';

export function GamesPage() {
  return (
    <>
      <Header />
      <SubTitle>Jogos</SubTitle>
      <Container>
        <Card
          link='snake'
          title='Snake'
          image={snake}
        />
        {/* <Card
          link='pong'
          title='Pong'
          image='545'
        />
        <Card
          link='breakout'
          title='BreakOut'
          image='545'
        /> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 16px 64px;

  >div {
    max-width: 100%;
  }
`;
