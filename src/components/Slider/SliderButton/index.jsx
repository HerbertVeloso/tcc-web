import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Wrapper } from './styles';

export function SliderButton({ type, onClick }) {
  return (
    <Wrapper
      direction={type}
      type='button'
      onClick={onClick}
    >
      {type === 'next' && (
        <MdArrowBackIos />
      )}
      {type === 'prev' && (
        <MdArrowForwardIos />
      )}
    </Wrapper>
  );
}
