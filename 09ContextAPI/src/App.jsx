import React, { useContext } from 'react'
import Counter from './Counter'
import './App.css'
import { Context } from './CContext'

export default function App() {
  const { counter } = useContext(Context)
  return (
    <div>
        <h1>The Value of Counter now is : {counter}</h1>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  )
}
