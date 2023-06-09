import { Component } from 'react';
import styled from 'styled-components';
import { GameMenu } from '../../components/GameMenu/index.jsx';
import Box, { BACKGROUND, BALL, PLAYER } from './box.jsx';

const ROW_SIZE = 10;
const COL_SIZE = 20;

const PADDLE_BOARD_SIZE = 3;
const PADDLE_EDGE_SPACE = 1;

const PLAYER_UP = 38;
const PLAYER_DOWN = 40;
const PAUSE = 32;

const inner = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'justify',
  position: 'relative'
};

// const outer = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'justify',
//   Text: '100px',
//   // padding: '10px'
// };

const dividerStyle = {
  // marginLeft: '50px',
  fontSize: '50px',
  color: 'white'
};

const score = {
  // marginLeft: '100px',
  fontSize: '50px',
  color: 'white'
};

const style = {
  height: 'fit-content',
  minWidth: '100%',
  display: 'grid',
  gridTemplate: `repeat(${ROW_SIZE}, 1fr) / repeat(${COL_SIZE}, 1fr)`
};


const InitialState = () => {
  const paddle = [...Array(PADDLE_BOARD_SIZE)].map((_, pos) => pos);
  return {
    player: paddle.map(x => (x * COL_SIZE) + PADDLE_EDGE_SPACE),
    opponent: paddle.map(x => ((x + 1) * COL_SIZE) - (PADDLE_EDGE_SPACE + 1)),
    ball: Math.round((ROW_SIZE * COL_SIZE) / 2) + ROW_SIZE,
    ballSpeed: 100,
    deltaY: -COL_SIZE,
    deltaX: -1,
    pause: true,
    opponentSpeed: 150,
    opponentDir: false,
    playerScore: 0,
    opponentScore: 0,
  };
};

class Pong extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState();
  }

  resetGame = () => this.setState({
    ball: Math.round((ROW_SIZE * COL_SIZE) / 2) + ROW_SIZE,
  });

  moveBoard = (playerBoard, isUp) => {
    const playerEdge = isUp ? playerBoard[0] : playerBoard[PADDLE_BOARD_SIZE - 1];

    if (!this.touchingEdge(playerEdge)) {
      const deltaY = (isUp ? -COL_SIZE : COL_SIZE);
      const newDir = (this.state.deltaY !== COL_SIZE ^ isUp) ? -this.state.deltaY : this.state.deltaY;

      if (!this.touchingEdge(this.state.ball)) {
        switch (this.state.ball) {
          case playerEdge + deltaY - 1:
            this.setState({
              deltaY: newDir,
              deltaX: -1,
            });
            break;
          case playerEdge:
            this.setState({
              deltaY: newDir,
            });
            break;
          case playerEdge + deltaY + 1:
            this.setState({
              deltaY: newDir,
              deltaX: 1,
            });
            break;
        }
      }
      return playerBoard.map(x => x + deltaY);
    }
    return false;
  };

  componentDidMount() {
    setInterval(() => {
      if (!this.state.pause) {
        this.bounceBall();
      }
    }, this.state.ballSpeed);
    setInterval(() => {
      if (!this.state.pause) {
        this.moveOpponent();
      }
    }, this.state.opponentSpeed);

    document.onkeydown = this.keyInput;
  }

  touchingEdge = (pos) => (0 <= pos && pos < COL_SIZE) || (COL_SIZE * (ROW_SIZE - 1) <= pos && pos < COL_SIZE * ROW_SIZE);

  touchingPaddle = (pos) => {
    return (this.state.player.indexOf(pos) !== -1) ||
      (this.state.opponent.indexOf(pos) !== -1) ||
      this.state[(this.state.deltaX === -1) ? 'player' : 'opponent'].indexOf(pos + this.state.deltaX) !== -1;
  };

  isScore = (pos) => (this.state.deltaX === -1 && pos % COL_SIZE === 0) || (this.state.deltaX === 1 && (pos + 1) % COL_SIZE === 0);

  moveOpponent = () => {
    const movedPlayer = this.moveBoard(this.state.opponent, this.state.opponentDir);
    movedPlayer ? this.setState({ opponent: movedPlayer }) :
      this.setState({ opponentDir: !this.state.opponentDir });
  };

  touchingPaddleEdge = (pos) => this.state.player[0] === pos ||
    this.state.player[PADDLE_BOARD_SIZE - 1] === pos ||
    this.state.opponent[0] === pos ||
    this.state.opponent[PADDLE_BOARD_SIZE - 1] === pos;

  bounceBall = () => {
    const newState = this.state.ball + this.state.deltaY + this.state.deltaX;
    if (this.touchingEdge(newState)) {
      this.setState({ deltaY: -this.state.deltaY });
    }

    if (this.touchingPaddleEdge(newState)) {
      this.setState({ deltaY: -this.state.deltaY });
    }

    if (this.touchingPaddle(newState)) {
      this.setState({ deltaX: -this.state.deltaX });
    }

    this.setState({ ball: newState });

    if (this.isScore(newState)) {
      if (this.state.deltaX !== -1) {
        this.setState({
          playerScore: this.state.playerScore + 1,
          ball: newState,
        });
      } else {
        this.setState({
          opponentScore: this.state.opponentScore + 1,
          ball: newState,
        });
      }
      this.setState({ pause: true });
      this.resetGame();
    }
  };

  keyInput = ({ keyCode }) => {
    switch (keyCode) {
      case PLAYER_UP:
      case PLAYER_DOWN:
        const movedPlayer = this.moveBoard(this.state.player, keyCode === PLAYER_UP);
        if (movedPlayer) {
          this.setState({ player: movedPlayer, pause: false });
        }
        break;
      case PAUSE:
        this.setState({ pause: true });
        break;
    }
  };

  render() {
    const board = [...Array(ROW_SIZE * COL_SIZE)].map((_, pos) => {
      let val = BACKGROUND;
      if ((this.state.player.indexOf(pos) !== -1) || (this.state.opponent.indexOf(pos) !== -1)) {
        val = PLAYER;
      } else if (this.state.ball === pos) {
        val = BALL;
      }
      return <Box key={pos} k={pos} name={val} />;
    });

    const divider = [...Array(ROW_SIZE / 2 + 2)].map(_ => <div>{'|'}</div>);
    return (
      <>
        {/* <div style={outer}> */}
        <div style={inner}>
          <div style={style}>{board}</div>
          <Score>
            <span>{this.state.playerScore.toString().padStart(2, '0')}</span>
            <div />
            <span>{this.state.opponentScore.toString().padStart(2, '0')}</span>
          </Score>
        </div>
        {/* </div> */}
        <GameMenu
          title='Pong'
          score={this.state.playerScore}
          gameOver={false}
          resetGame={() => { }}
        >
          <ul>
            <li>Pressione espaço para pausar o jogo</li>
            <li>Use as setas para cima e para baixo para jogar</li>
          </ul>
        </GameMenu>
      </>
    );
  }
}

export default Pong;


const Score = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-36%);
  display: flex;
  height:100%;
  gap: 16px;

  span {
    font-size: 32px;
    font-weight: bold;
  }

  div {
    width: 2px;
    height:100%;
    background: white;
  }
`;
