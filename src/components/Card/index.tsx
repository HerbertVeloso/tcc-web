import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

type CardProps = {
  link: string;
  image: string;
  title: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ link, image, title }: CardProps, ref) => {
  return (
    <Wrapper
      ref={ref}
    >
      <Link to={link}>
        <img
          src={image}
          alt={title}
        />
        <div>
          <strong>{title}</strong>
        </div>
      </Link>
    </Wrapper>
  );
});


Card.displayName = 'Card';
