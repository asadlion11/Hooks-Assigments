import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] =  useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        count ==0 ? setCount(0) : setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button type='button' style={{
            padding:10,
            margin:10,
            backgroundColor: 'red',
            color:'#fff',
            fontSize:20
        }}
        onClick={resetCount}>Reset</button>
        <button type='button' style={{
            padding:10,
            margin:5,
            fontSize:20
        }}
        onClick={incrementCount}>+</button>
        <button type='button' style={{
            padding:10,
            margin:5,
            fontSize:20
        }}
        onClick={decrementCount}>-</button>
    </div>
  )
}

export default Counter