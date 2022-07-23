
import React, { useState } from 'react'

const Switch = () => {
  
const [count, setCount] = useState(0);
const [counterClass, setCounterClass] = useState('');


const handleSetLightTheme = () => {
  setCounterClass('light')
  setCount(prev => prev + 1)

}

const handleSetDarkTheme = () => {
  setCounterClass('dark')
  setCount(prev => prev + 1)
}


  return (
    <div className={"switch " + counterClass}>
      <h2>Theme picker</h2>
      <h4>Times changed: {count} </h4>
      <button onClick={handleSetLightTheme}>Light Theme</button>
      <button onClick={handleSetDarkTheme}>Dark Theme</button>
    </div>
  )
}

export default Switch;
