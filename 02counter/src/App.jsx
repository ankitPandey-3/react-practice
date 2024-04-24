import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [message, setMessage] = useState("")
  let [counter, setCounter] = useState(5)
  
  let [flag, setFlag] = useState(false);
  //console.log(counter)
  //let counter = 5; This will get affected but never gets propagated in the UI
  //to propagate the variable change in the UI "useState" hooks must be used
  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setFlag(false)
    }
    else{
      setFlag(true)
      setMessage("Counter OverFlow")
    }
  }

  const removeValue = () => {
    if(counter > 0){
        setCounter(counter-1)
        setFlag(false)
    }
    else{
      setFlag(true)
      setCounter(-1)
      setMessage("Counter UnderFlow")
      
    }
    
  }
 
  return (
    <>
      <h1>Chai aur react</h1>
      <h2 id='Click'>Counter Value: {flag ? message : counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      
    </>
  )
}

export default App
