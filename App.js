import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [list, setList] = useState([])
  const [red, setRed] = useState([])
  
  const handleUndo = (event) =>{
    event.stopPropagation();
    console.log("desfiz")


    if(list.length === 0){
      return;
    }

    const lastItem = list[list.length - 1]
    setRed((prev) => [...prev, lastItem])

    setList((prev) =>{
      const newArray = [...prev].slice(0, -1)
      return newArray
    })
  }

  const handleClick = (event) => {
    
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }

    console.log(newDot)

    setList((prev) => [...prev, newDot])

  }

  const handleRedo = (event) =>{
    event.stopPropagation()
    console.log("Refeito")

    const recovery = red[red.length -1]

    if(red.length === 0){
      return
    }
    setRed((prev) => {
      const newArray = [...prev].slice(0,-1)
      return newArray
    })
    setList((prev) => [...prev, recovery])
  }

  return (
    <div id='page' onClick={handleClick}>
      <button onClick={handleUndo} id='btn'>undone</button>
      <button onClick={handleRedo} id='btn'>redo</button>
      {list.map((item) => (
        <span className='dot'
        style={{top:item.clientY, left:item.clientX}}/>
      ))}
    </div>
  );
}

export default App;
