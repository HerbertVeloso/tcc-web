import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Wrapper } from './styles';

interface SliderButtonProps {
  type: 'prev' | 'next';
  onClick: () => void;
}

export function SliderButton({ type, onClick }: SliderButtonProps) {
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
