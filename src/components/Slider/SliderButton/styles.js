import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 64px;
  height: calc(100% - 64px);
  position: absolute;
  background-color: transparent;
  background-image: linear-gradient(${({ direction }) => direction === 'prev' ? 'to right' : 'to left'}, transparent, rgba(0,0,0,0.9));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border: none;
  position: absolute;
  z-index: 10;
  left: ${({ direction }) => direction === 'next' ? 0 : 'auto'};
  right: ${({ direction }) => direction === 'prev' ? 0 : 'auto'};
`;
