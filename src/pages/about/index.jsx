import styled from 'styled-components';
import { Header } from '../../components/Header';
import { SubTitle } from '../../components/SubTitle';

export function AboutPage() {
  return (
    <>
      <Header />
      <section>
        <SubTitle>Sobre</SubTitle>
        <Info>
          <p>Projeto de TCC sobre Desenvolvimento Front End com React.</p>
          <p>Desenvolvido por Herbert Veloso e Raphael Lopes.</p>
        </Info>

        <Conclusion>
          <p>
            O objetivo deste trabalho buscou demonstrar, de forma prática, a montagem de uma
            aplicação front-end com jogos em JavaScript utilizando a biblioteca React. Através da
            criação de um minimundo de site aberto, sem a necessidade de cadastro de clientes, e a
            implementação de uma aba de jogos retrô, foi possível apresentar uma solução completa e
            envolvente para os usuários.
          </p>
          <p>
            Ao construir uma plataforma que integra um catálogo de filmes e jogos para jogar,
            conseguimos exemplificar todos os conceitos e técnicas discutidos ao longo do trabalho.
            Através da interface desenvolvida, os usuários têm acesso a uma variedade de opções de
            entretenimento, que atendem tanto aos amantes de filmes quanto aos entusiastas de jogos
            retrô.
          </p>

        </Conclusion>

        <Credits>
          <p>Filmes: The Movie Database API</p>
          <p>Jogos: Adaptados do Github umangshrestha</p>
          <p>Imagens: Flaticon e Freepik</p>
        </Credits>
      </section>
    </>
  );
}

const Info = styled.div`
  margin: 16px 32px;

  >p {
    font-size: 24px;
    font-weight: bolder;

    &+p {
      margin-top: 8px;
    }
  }
`;

const Conclusion = styled.div`
  margin: 16px 32px;

  >p {
    font-size: 18px;

    &+p {
      margin-top: 8px;
    }
  }
`;

const Credits = styled.div`
  margin: 32px;

  >p {
    font-size: 14px;
  }
`;
