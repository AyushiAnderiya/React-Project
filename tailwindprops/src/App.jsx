import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Ayushi from './Components/images/ayu.jpeg'
import Suhani from './Components/images/suhani.jpeg'
import Ishika from './Components/images/ishu.jpeg'
import Pallavi from './Components/images/pallavi.jpeg'
import Anjali from './Components/images/anjali.jpeg'
import Kirti from './Components/images/kirti.jpeg'
import bgg from './Components/images/bgg.jpeg'

function App() {
  const [count, setCount] = useState(0)
  const Arr = ["Ayushi", "Suhani", "Ishika", "Pallavi", "Anjali", "Kirti"];
  return (
    <>
      <h1 className="text-5xl font-extrabold text-white-700 tracking-wide p-5 text-center shadow-md bg-gradient-to-r from-blue-400 to-blue-800 text-white rounded-xl">
        D-Developers
      </h1>
      <div className=" flex flex-wrap gap-4 mt-5">
        <Card username={Arr[0]} background={Ayushi} />
        <Card username={Arr[1]} background={Suhani} />
        <Card username={Arr[2]} background={Ishika} />
        <Card username={Arr[3]} background={Pallavi} />
        <Card username={Arr[4]} background={Anjali} />
        <Card username={Arr[5]} background={Kirti} />
      </div>
    </>
  )
}

export default App

