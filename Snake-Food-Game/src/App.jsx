import React,{useState,} from 'react'

const App = () => {
const Grid_Size = 20;
const Cell_Size = 20;
const Initia_Snake = [{x: 10, y: 10}];
const Initial_Food = {x: 15, y: 15};
const Initial_DIrection ="right";
const [snake, setSnake] = useState(Initia_Snake);
const [food, setFood] = useState(Initial_Food);
const [direction, setDirection] = useState(Initial_DIrection);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(false);

const generateFood = () => {
  const newFood ={
    x: Math.floor(Math.random() * Grid_Size),
    y: Math.floor(Math.random() * Grid_Size),
  };
  if (snake.some(segment) => segment.x === newFood.x && segment.y === newFood.y))
    return generateFood() : newFood;
  }
  const moveFood = () => {
    setFood(newFood);
  }
 





  return (
    <div className="game-container">
      <div className="scope">
        Score- 5
      </div>

      <div className="game-border">
    
      </div>
    </div>
  )
}

export default App;