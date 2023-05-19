import React, { useState } from 'react'

const PrevCurr = () => {
    const [count, setCount] = useState(1)
    const update = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h2>Prev: {count -1}</h2>
        <h2>Current: {count}</h2>
        <button type='button'
        style={{
            padding:10,
            margin:5,
            borderRadius:10,
            fontSize:18
        }}
        onClick={update}>Update</button>
    </div>
  )
}

export default PrevCurr