import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './index.css'
import SquareComponent from './components/SquareComponent'
const init=["","","","","","","","","",]
function App() {
const[gamestate, setGamestate]=useState(init);
const[isxChance, setIsxChance]=useState(false);
const onSquareclick=(index)=>{
  let Strings=Array.from(gamestate);
  Strings[index]=isxChance ? "x" :"0";
  setGamestate(Strings)
  setIsxChance(!isxChance)
}

useEffect(()=>{
const winner =CheckWinner();

if(winner)
{
  alert(`Ta Da! ${winner} has won the game`)
  setGamestate(init);
}

},[gamestate])

const CheckWinner=()=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
      return gamestate[a];
    }
  }
  return null;
}
  return (
    <div className="app-header">

      <p className='heading-text'>Tic Tac Toe</p>
<div className="row jc-center">
<SquareComponent  className="b-bottom-right" state={gamestate[0]} onClick={()=>onSquareclick(0)} />
<SquareComponent className="b-bottom-right" state={gamestate[1]} onClick={()=>onSquareclick(1)}/>
<SquareComponent className="b-bottom" state={gamestate[2]} onClick={()=>onSquareclick(2)}/>
</div>
<div className="row jc-center">
<SquareComponent className="b-bottom-right" state={gamestate[3]} onClick={()=>onSquareclick(3)}/>
<SquareComponent className="b-bottom-right" state={gamestate[4]} onClick={()=>onSquareclick(4)}/>
<SquareComponent className="b-bottom" state={gamestate[5]} onClick={()=>onSquareclick(5)}/>
</div>
<div className="row jc-center">
<SquareComponent className="b-right" state={gamestate[6]} onClick={()=>onSquareclick(6)}/>
<SquareComponent className="b-right" state={gamestate[7]} onClick={()=>onSquareclick(7)}/>
<SquareComponent state={gamestate[8]} onClick={()=>onSquareclick(8)}/>
</div>
<button className='clear-button' onClick={()=>setGamestate(init)}>Clear Game</button>
    </div>
  )
}

export default App
