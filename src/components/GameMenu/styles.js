import styled from 'styled-components';
import { SubTitle } from '../../components/SubTitle';

export const Title = styled(SubTitle)`
margin: 0;
margin-bottom: 32px;
`;

export const Points = styled.h2`
color: var(--secondary);
margin-bottom: 4px;
`;

export const PointsNumber = styled.p`
font-size: 24px;
color: var(--secondary);
`;

export const Strong = styled.h3`
margin-top: 24px;
margin-bottom: 8px;
`;

export const Text = styled.p`
margin-bottom: 16px;
`;


export const Instructions = styled.div`
  li {
    &+li {
      margin-top: 8px;
    }
  }
`;
