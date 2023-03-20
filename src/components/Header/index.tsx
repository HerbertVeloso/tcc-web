import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Wrapper } from './styles';

export function Header() {
  return (
    <Wrapper>
      <Logo
        width='180px'
      />
      <Navbar />
    </Wrapper>
  );
}
