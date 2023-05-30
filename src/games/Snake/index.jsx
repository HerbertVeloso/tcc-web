import React, { Component } from 'react';
import { GameMenu } from '../../components/GameMenu';
import { Grid, SnakeContainer } from './styles';

const HEIGHT = 10;
const WIDTH = 10;

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32;

const getRandom = () => {
  return {
    x: Math.floor(Math.random() * WIDTH),
    y: Math.floor(Math.random() * HEIGHT)
  };
};

const emptyRows = () => [...Array(WIDTH)].map(() => [...Array(HEIGHT)].map(() => 'grid-item'));

const increaseSpeed = (speed) => speed - 10 * (speed > 10);

const initialState = {
  rows: emptyRows(),
  snake: [getRandom()],
  food: getRandom(),
  direction: STOP,
  speed: 100,
  gameOver: false,
  lastDirection: RIGHT,
  start: false,
};

class Snake extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.changeDirection;
  }

  componentDidUpdate() {
    if (this.state.start) {
      this.isCollapsed();
      this.isEaten();
    }
  }

  moveSnake = () => {
    if (!this.state.start) return;

    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    switch (this.state.direction) {
      case LEFT: head.y += -1; break;
      case UP: head.x += -1; break;
      case RIGHT: head.y += 1; break;
      case DOWN: head.x += 1; break;
      default: return;
    }

    head.x += HEIGHT * ((head.x < 0) - (head.x >= HEIGHT));
    head.y += WIDTH * ((head.y < 0) - (head.y >= WIDTH));

    snakeCopy.push(head);
    snakeCopy.shift();

    this.setState({
      snake: snakeCopy,
      head: head,
    });
    this.update();
  };

  isEaten() {
    let snakeCopy = [...this.state.snake];
    let head = { ...snakeCopy[snakeCopy.length - 1] };
    let food = this.state.food;
    if ((head.x === food.x) && (head.y === food.y)) {
      snakeCopy.push(head);
      this.setState({
        snake: snakeCopy,
        food: getRandom(),
        speed: increaseSpeed(this.state.speed),
      });
    }
  }

  update() {
    let newRows = emptyRows();
    this.state.snake.forEach(element => newRows[element.x][element.y] = 'snake');
    newRows[this.state.food.x][this.state.food.y] = 'food';
    this.setState({ rows: newRows });
  }

  isCollapsed = () => {
    let snake = this.state.snake;
    let head = { ...snake[snake.length - 1] };
    for (let i = 0; i < snake.length - 3; i++) {
      if ((head.x === snake[i].x) && (head.y === snake[i].y)) {
        this.setState({
          gameOver: true,
          start: false,
          direction: STOP,
        });
      }
    }
  };

  resetGame = () => {
    this.setState(initialState);
  };

  changeDirection = ({ keyCode }) => {
    if (!this.state.start) {
      if (keyCode !== STOP) {
        return;
      }
      this.setState({
        start: true,
      });
    }

    let direction = this.state.direction;
    let lastDirection = this.state.lastDirection;

    switch (keyCode) {
      case LEFT:
        lastDirection = direction;
        direction = (direction === RIGHT) ? RIGHT : LEFT;
        break;
      case RIGHT:
        lastDirection = direction;
        direction = (direction === LEFT) ? LEFT : RIGHT;
        break;
      case UP:
        lastDirection = direction;
        direction = (direction === DOWN) ? DOWN : UP;
        break;
      case DOWN:
        lastDirection = direction;
        direction = (direction === UP) ? UP : DOWN;
        break;
      case STOP:
        if (direction !== STOP) {
          lastDirection = direction;
          direction = STOP;
        } else {
          direction = lastDirection;
        }
        break;
      default:
        break;
    }
    this.setState({
      direction: direction,
      lastDirection: lastDirection,
    });
  };

  render() {
    const displayRows = this.state.rows.map((row, i) => row.map((value, j) => <div key={`${i}=${j}`} className={value} />));
    return (
      <>
        <SnakeContainer>
          <Grid>{displayRows}</Grid>
        </SnakeContainer>
        <GameMenu
          title='Snake'
          score={(this.state.snake.length - 1) * 10}
          gameOver={this.state.gameOver}
          resetGame={this.resetGame}
        >
          <ul>
            <li>Pressione espaço para iniciar/pausar o jogo</li>
            <li>Use as setas para mudar a direção da cobrinha</li>
          </ul>
        </GameMenu>
      </>
    );
  }
}

export default Snake;
