// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const initSnake = {
  bodyLocation: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ],
  scale: 20,
  direction: 'DOWN',
  speed: 1000,
}

function App() {
  const [snake, setSnake] = useState(initSnake)

  function move() {
    const newBodyLocation = [...snake.bodyLocation];
    const head = snake.bodyLocation[snake.bodyLocation.length - 1];

    if (snake.direction === 'RIGHT') {
      const x = head[0] + 1;
      const y = head[1];
      newBodyLocation.push([x, y])
    } else if (snake.direction === 'LEFT') {
      const x = head[0] - 1;
      const y = head[1];
      newBodyLocation.push([x, y]);
    } else if (snake.direction === 'UP') {
      const x = head[0];
      const y = head[1] - 1;
      newBodyLocation.push([x, y]);
    } else if (snake.direction === 'DOWN') {
      const x = head[0];
      const y = head[1] + 1;
      newBodyLocation.push([x, y]);
    }
    console.log("move")


    newBodyLocation.shift();
    console.log(newBodyLocation);//debug
    setSnake({ ...snake, bodyLocation: newBodyLocation });
  }

  function onKeyPress(event) {
    // console.log(event);
    console.log(event.key);

    if (event.key === "ArrowUp") {
      setSnake({ ...snake, direction: 'UP' });
    } else if (event.key === "ArrowDown") {
      setSnake({ ...snake, direction: 'DOWN' });
    } else if (event.key === "ArrowRight") {
      setSnake({ ...snake, direction: 'RIGHT' });
    } else if (event.key === "ArrowLeft") {
      setSnake({ ...snake, direction: 'LEFT' });
    }
  }

  function hasHitWall() {

  }

  useEffect(() => {
    const interval = setInterval(move, snake.speed);
    return () => clearInterval(interval);
  },);

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => document.removeEventListener('keydown', onKeyPress);
  })

  setTimeout(() => {
    // move()
  }, 1000);

  return (
    <>
      <div className='game-board'>
        {/* <div className='snake-body' style={{ left: 0, top: 0 }}></div>
        <div className='snake-body' style={{ left: 20, top: 0 }}></div>
        <div className='snake-body' style={{ left: 40, top: 0 }}></div>
        <div className='snake-body' style={{ left: 60, top: 0 }}></div> */}


        {snake.bodyLocation.map((item) => {
          return <div className='snake-body' style={{ left: item[0] * snake.scale, top: item[1] * snake.scale }}></div>
        })}

      </div>

    </>
  );
}

export default App;
