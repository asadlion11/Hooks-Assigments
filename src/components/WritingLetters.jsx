import React, { useState } from 'react'

const WritingLetters = () => {
  const [text, setText] = useState('')
  const showText = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
        <input type="text" placeholder='Enter some letters'
        style={{
          margin:10,
          padding:5,
          fontFamily:'cursive',
          fontSize:20,
          borderRadius:10
        }}
        onChange={showText}/>
        <p
        style={{
          margin:20,
          fontSize:20
        }}>{text}</p>
    </div>
  )
}
export default WritingLetters