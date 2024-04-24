import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*()-_=+{[}]:;<,>.?/\|';

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);


  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const copyToClip = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 text-2xl font-serif'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClip}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id='charInput'
            onChange={(e)=>{
              setCharacterAllowed((prev)=> !prev)
            }} 
            />
            <label htmlFor="charInput">Characters</label>
        </div>
      </div>

    </div>

  )
}

export default App
