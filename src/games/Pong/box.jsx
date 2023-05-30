import React from 'react';

/* Enum */
const BACKGROUND = 0;
const PLAYER = 1;
const BALL = 2;
export {
  BACKGROUND,
  PLAYER,
  BALL,
};

const backgroundStyle = {
  // height: '100%',
  aspectRatio: '1/1',
  width: '100%',
  borderStyle: 'solid',
  borderWidth: '1px',
  justifyContent: 'center',
  backgroundColor: 'black',
  borderRadius: '2px',
  color: 'red',
};
const playerStyle = {
  // height: '35px',
  // width: '35px',
  // borderStyle: 'solid',
  // borderWidth: '3px',
  // color: 'white',
  outline: '1px solid white',
  aspectRatio: '1/1',
  width: '100%',
  justifyContent: 'center',
  backgroundColor: 'blue',
};

const ballStyle = {
  // height: '35px',
  width: '100%',
  aspectRatio: '1/1',
  display: 'block',
  backgroundColor: 'yellow',
  justifyContent: 'center',
  borderRadius: '100%',
  color: 'white',
  zIndex: '10',
  position: 'relative'
};

const getStyle = (val) => {
  if (val === BACKGROUND) {
    return {};
  } if (val === PLAYER) {
    return playerStyle;
  } else {
    return ballStyle;
  }
};

const Box = (props) => <div style={backgroundStyle}>
  <div style={getStyle(props.name)} />
</div>;

export default Box;
