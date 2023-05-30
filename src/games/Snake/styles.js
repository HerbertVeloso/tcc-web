import styled from 'styled-components';

export const SnakeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .grid-item {
    outline: 1px solid grey;
    width: 50px;
    height: 50px;
  }

  .snake {
    /* outline: 1px solid #55B56A; */
    background-color: #55B56A;
    width: 50px;
    height: 50px;
  }

  .food {
    /* outline: 1px solid #C8D952; */
    background-color: #C8D952;
    width: 50px;
    height: 50px;
  }
`;
