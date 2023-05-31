import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

export const Card = forwardRef(({ link, image, title }, ref) => {
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
