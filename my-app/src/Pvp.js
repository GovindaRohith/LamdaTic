import React,{useState} from 'react'
import zero from './zero.png';
import xpic from './X.png';
import opic from './O.png';
import {  AddCircleOutline, AddCircleOutlineRounded, AddCircleOutlineSharp, Brightness1Outlined, CheckCircleOutline, Close, SwapHorizontalCircleTwoTone} from '@material-ui/icons';
export default function Pvp() {
  const [One, setOne] = useState(0);
  const [Two, setTwo] = useState(0);
  const [Three, setThree] = useState(0);
  const [Four, setFour] = useState(0);
  const [Five, setFive] = useState(0);
  const [Six, setSix] = useState(0);
  const [Seven, setSeven] = useState(0);
  const [Eight, setEight] = useState(0);
  const [Nine, setNine] = useState(0);
  const[p1,setp1]=useState(zero);
const[p2,setp2]=useState(zero);
const[p3,setp3]=useState(zero);
const[p4,setp4]=useState(zero);
const[p5,setp5]=useState(zero);
const[p6,setp6]=useState(zero);
const[p7,setp7]=useState(zero);
const[p8,setp8]=useState(zero);
const[p9,setp9]=useState(zero);
  const[score,setscore]=useState(0)
  const def=()=>
  {

  }
  const check=()=>
  {
    
  }
  const change=(num)=>
  {
    //p1 means for the images p1 represents X or O at spec posi
    //One,Two.....position binary
    //player 1 -->X and PLayer 2--> O
    if(num==1&&One==0)
    {
      setOne(1);
      if(score%2==0)
      {
        setp1(xpic);
      }
      else
      {
        setp1(opic);
      }
      setscore(score+1);
    }
    else if(num==2&&Two==0)
    {
      setTwo(1);
      if(score%2==0)
      {
        setp2(xpic);
      }
      else
      {
        setp2(opic);
      }
      setscore(score+1);
    }
    else if(num==3&&Three==0)
    {
      setThree(1);
      if(score%2==0)
      {
        setp3(xpic);
      }
      else
      {
        setp3(opic);
      }
      setscore(score+1);
    }
    else if(num==4&&Four==0)
    {
      setFour(1);
      if(score%2==0)
      {
        setp4(xpic);
      }
      else
      {
        setp4(opic);
      }
      setscore(score+1);
    }
    else if(num==5&&Five==0)
    {
      setFive(1);
      if(score%2==0)
      {
        setp5(xpic);
      }
      else
      {
        setp5(opic);
      }
      setscore(score+1);
    }
    else if(num==6&&Six==0)
    {
      setSix(1);
      if(score%2==0)
      {
        setp6(xpic);
      }
      else
      {
        setp6(opic);
      }
      setscore(score+1);
    }
    else if(num==7&&Seven==0)
    {
      setSeven(1);
      if(score%2==0)
      {
        setp7(xpic);
      }
      else
      {
        setp7(opic);
      }
      setscore(score+1);
    }
    else if(num==8&&Eight==0)
    {
      setEight(1);
      if(score%2==0)
      {
        setp8(xpic);
      }
      else
      {
        setp8(opic);
      }
      setscore(score+1);
    }
    else if(num==9&&Nine==0)
    {
      setNine(1);
      if(score%2==0)
      {
        setp9(xpic);
      }
      else
      {
        setp9(opic);
      }
      setscore(score+1);
    }
    else
    {}
    console.log("HELLO WOD");
  }
  
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

<div className="status">Player{score%2+1}'s Chance</div>
<input className='one'   type="image" src={p1} onClick={()=>change(1)}/>
<input className='two'   type="image" src={p2} onClick={()=>change(2)}/>
<input className='three'   type="image" src={p3} onClick={()=>change(3)}/>
<input className='four'   type="image" src={p4} onClick={()=>change(4)}/>
<input className='five'   type="image" src={p5} onClick={()=>change(5)}/>
<input className='six'   type="image" src={p6} onClick={()=>change(6)}/>
<input className='seven'   type="image" src={p7} onClick={()=>change(7)}/>
<input className='eight'   type="image" src={p8} onClick={()=>change(8)}/>
<input className='nine'   type="image" src={p9} onClick={()=>change(9)}/>
<div>{grid()}</div>
   </>
  )
}
