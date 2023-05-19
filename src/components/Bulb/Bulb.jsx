import React, { useState } from 'react'
import on from './on.png'
import off from './off.png'
const Bulb = () => {
    const [toggle,setToggle] = useState(true)
    const toggleBtn = () => {
        setToggle(!toggle)
    }
  return (
    <div>
        <img src={toggle?on:off} width='200'
        style={{
          backgroundColor:'black',
        }}/> <br/>
        <button onClick={toggleBtn} style={{
                padding: 5,
                margin: 40,
                width: 90,
        }}>{toggle?'on':'off'}</button>
    </div>
  )
}

export default Bulb