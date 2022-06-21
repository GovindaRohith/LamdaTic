import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
export default function Home() {
  return (
    <>
          <nav className="navbar" style={{backgroundColor: 'rgb(125, 13, 211)'}}>
<div className='title'>Tic Tac Toe</div>
</nav>
<Link to="/pvc">
<button type="button" className="btn btn-outline-dark">Start 1P vs AI</button>
</Link>

<Link to="/pvp">
<button type="button" className="btn btn-outline-dark">Start 2 PvP</button>
</Link>
    </>
  )
}
