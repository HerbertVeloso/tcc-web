import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px 0;
  overflow: hidden;
  position: relative;
`;


export const Container = styled.div`
  display: flex;
  position: relative;
`;


export const Box = styled.div`
  display: flex;
  gap: 6px;
  padding: 0 64px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
`;
