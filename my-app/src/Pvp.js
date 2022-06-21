import React from 'react'
import { Close } from '@material-ui/icons';
export default function Pvp() {
  const grid=()=>
  {
  return(
  <>
  <div  className="title2">
  <img src='https://i0.wp.com/www.thegamegal.com/wp-content/uploads/2018/08/ultimate-tic-tac-toe12-01.png?resize=340%2C340&ssl=1'></img>
  </div>
  </>
  );
  }
  return (
   <>
<nav className="navbar" style={{backgroundColor: 'rgb(125, 13, 211)'}}>
<div className='title'>Tic Tac Toe</div>
</nav>  
<div>{grid()}</div>
<Close/>
   </>
  )
}
