import React,{useContext} from 'react'
import { Context } from './CContext'

function Counter() {
    const { setCounter } = useContext(Context)
  return (
    <div>
        <button onClick={()=> setCounter(prev => prev+1)}>Increment</button>
        <button onClick={()=> setCounter(prev => prev-1)}>Decrement</button>
    </div>
  )
}

export default Counter