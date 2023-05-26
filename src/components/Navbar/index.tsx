import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

export function Navbar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to='/'>Filmes</Link>
        </li>
        <li>
          <Link to='/games'>Jogos</Link>
        </li>
        <li>
          <Link to='/about'>Sobre</Link>
        </li>
      </ul>
    </Wrapper>
  );
}
