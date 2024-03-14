import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {

  const [Length, setLength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [Character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number)
      str += "0123456789"
    if (Character)
      str += "~!@#$%^&*(){}[]./:?<>";

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [Length, Number, Character, setPassword]);
  useEffect(()=>{
    PasswordGenerator()
  },[Length,Number,Character,PasswordGenerator]);
  return (

    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-red-600'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />
        </div>
        <div className='flex text-sm gap-x-2 text-blue-300'>
          <div className='flex items-center gap-x-1'>
            <br />
            <input type="range" min={6} max={100} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label >Length:{Length}</label>
            <div className='flex item-center pl-2 gap-x-1'>
              <input type="checkbox" defaultChecked={Number} id='num' onChange={() => { setNumber((prev) => !prev); }} />
              <label htmlFor='NumberInput'>Number</label> &nbsp;
              <input type="checkbox" defaultChecked={Character} id='num' onChange={() => { setCharacter((prev) => !prev); }} />
              <label htmlFor='characterInput'>Character</label>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default App
