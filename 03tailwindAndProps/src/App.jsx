import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [card, setCard] = useState([])
  const addCard = (username) => {
    setCard([...card,username]);
  };

  return (
    <>
        <div className='flex'>
        {
          card.map((username) => (
            < Card username = {username} />
          ))}
      </div>
      <button onClick={()=>(addCard('Ankit'))}>Daddy Click Me</button>
    </>

  )
}


export default App
